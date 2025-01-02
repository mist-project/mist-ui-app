import { app, shell, BrowserWindow, ipcMain } from 'electron';
import { join } from 'path';
import path from 'node:path';

import { electronApp, optimizer, is } from '@electron-toolkit/utils';
import icon from '../../resources/icon.png?asset';

import { AuthTokens, DeepLinkRouter, JwtAuthManager, MistApiService } from './helpers';

if (process.defaultApp) {
  if (process.argv.length >= 2) {
    app.setAsDefaultProtocolClient('mist-app', process.execPath, [path.resolve(process.argv[1])]);
  }
} else {
  app.setAsDefaultProtocolClient('mist-app');
}

let mainWindow: BrowserWindow | null;
let currentTimeout;

function createWindow(): void {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  });

  mainWindow.on('ready-to-show', () => {
    if (mainWindow) {
      mainWindow.show();
    }
  });

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: 'deny' };
  });

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL']);
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'));
  }
}

const gotTheLock = app.requestSingleInstanceLock();

// TODO: replace this login for a setInterval
const performJwtRefresh = (): void => {
  const fifteenMinutes = 60 * 15 * 1000;
  const handler = async (): Promise<void> => {
    const tokens = JwtAuthManager.getTokens();
    const response = await MistApiService.refreshToken(tokens.refresh);
    if (response.ok) {
      const updatedTokens = await response.json();
      JwtAuthManager.setTokens(updatedTokens);
      if (mainWindow) {
        mainWindow.webContents.send('jwt-tokens', updatedTokens);
      }
      // TODO: Add proper claims checking so that it refreshes when necessary, not the satic
      // 15 mins i'm goingt o add here
      currentTimeout = setTimeout(handler, fifteenMinutes);
    } else {
      // If failure to update stuff, just logout the user.
      JwtAuthManager.deleteTokens();
      if (mainWindow) {
        mainWindow.webContents.send('is-authenticated', JwtAuthManager.isAuthenticated());
      }
    }
  };

  handler();
};

const waitTillWindowUp = (): void => {
  if (!mainWindow) setTimeout(waitTillWindowUp, 100);
};

if (!gotTheLock) {
  app.quit();
} else {
  app.on('second-instance', (event, commandLine) => {
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
    // the commandLine is array of strings in which last element is deep link url
    const url = commandLine.pop();
    if (url) {
      new DeepLinkRouter(url).handle();
      // if (mainWindow) {
      //   mainWindow.webContents.send('login-jwt', {
      //     accessToken: msg,
      //     refreshToken: msg
      //   });
      // }
    }
  });

  app.whenReady().then(() => {
    // Set app user model id for windows
    electronApp.setAppUserModelId('com.electron');

    // Default open or close DevTools by F12 in development
    // and ignore CommandOrControl + R in production.
    // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
    app.on('browser-window-created', (_, window) => {
      optimizer.watchWindowShortcuts(window);
    });

    // ipcMain.on('login-jwt-main', () => {
    //   const accessToken = JwtAuthManager.getToken();
    //   const refreshToken = JwtAuthManager.getToken();

    //   if (mainWindow) {
    //     mainWindow.webContents.send('login-jwt', {
    //       accessToken,
    //       refreshToken
    //     });
    //   }
    // });

    // Token refresh
    if (JwtAuthManager.isAuthenticated()) {
      waitTillWindowUp();
      performJwtRefresh();
    }

    ipcMain.on('authentication-status', () => {
      // Whenever the user requests an authentication status, server returns message with the response
      if (mainWindow) {
        mainWindow.webContents.send('is-authenticated', JwtAuthManager.isAuthenticated());
      }
    });

    ipcMain.on('get-jwt-main', () => {
      // User requests jwt tokens
      try {
        // the getTokens verifies if user is authenticated
        const tokens = JwtAuthManager.getTokens();
        if (mainWindow) {
          mainWindow.webContents.send('jwt-tokens', tokens);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error('An unknown error occurred');
        }
      }
    });

    ipcMain.on('store-jwt-main', (_, jwtAuthTokens: AuthTokens) => {
      // After user has been succesfully authenticated by API service
      // Then store the jwt tokens in the local store
      clearTimeout(currentTimeout);
      performJwtRefresh();
      JwtAuthManager.setTokens(jwtAuthTokens);
      if (mainWindow) {
        // isAuthenticated should return true
        mainWindow.webContents.send('is-authenticated', JwtAuthManager.isAuthenticated());
      }
      // TODO: add auto refresh setting. renderer will be listening
      // and forward message to ws connection to update tokens
    });

    ipcMain.on('remove-jwt-main', () => {
      // When user logs out, delete jwt tokens
      // TODO: add mutex lock mechanisms to avoid race conditions on set/delete tokens
      clearTimeout(currentTimeout);
      JwtAuthManager.deleteTokens();
      if (mainWindow) {
        // isAuthenticated should return false
        mainWindow.webContents.send('is-authenticated', JwtAuthManager.isAuthenticated());
      }
    });

    createWindow();

    app.on('activate', function () {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('open-url', (event, url) => {
  event.preventDefault();
  new DeepLinkRouter(url).handle();
  // if (mainWindow) {
  //   mainWindow.webContents.send('login-jwt', {
  //     accessToken: url,
  //     refreshToken: url
  //   });
  // }
});
