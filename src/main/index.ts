import { app, shell, BrowserWindow, ipcMain } from 'electron';
import { join } from 'path';
import path from 'node:path';

import { electronApp, optimizer, is } from '@electron-toolkit/utils';
import icon from '../../resources/icon.png?asset';

import {
  ACCESS_KEYS,
  AuthTokens,
  DeepLinkRouter,
  JsonStore,
  JwtAuthManager
  // MistApiService
} from './helpers';

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
      sandbox: false,
      nodeIntegration: false,
      contextIsolation: true
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
// const performJwtRefresh = (run: boolean): void => {
//   const fifteenMinutes = 60 * 15 * 1000;
//   const handler = async (): Promise<void> => {
//     if (!run) {
//       currentTimeout = setTimeout(handler, fifteenMinutes);
//       return;
//     }
//     const tokens = JwtAuthManager.getTokens();
//     const response = await MistApiService.refreshToken(tokens.refresh);
//     if (response.ok) {
//       const updatedTokens = await response.json();
//       JwtAuthManager.setTokens(updatedTokens);
//       if (mainWindow) {
//         mainWindow.webContents.send('jwt-tokens', updatedTokens);
//       }
//       // TODO: Add proper claims checking so that it refreshes when necessary, not the satic
//       // 15 mins i'm goingt o add here
//       currentTimeout = setTimeout(handler, fifteenMinutes);
//     } else {
//       // If failure to update stuff, just logout the user.
//       JwtAuthManager.deleteTokens();
//       if (mainWindow) {
//         mainWindow.webContents.send('is-authenticated', JwtAuthManager.isAuthenticated());
//       }
//     }
//   };

//   handler();
// };

// const waitTillWindowUp = (): void => {
//   if (!mainWindow) setTimeout(waitTillWindowUp, 100);
// };

if (!gotTheLock) {
  app.quit();
} else {
  app.on('second-instance', (_, commandLine) => {
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

    ipcMain.handle('is-authenticated', (): boolean => {
      // Whenever the user requests an authentication status, server returns message with the response
      if (mainWindow) {
        return JwtAuthManager.isAuthenticated();
      }

      return false;
    });

    ipcMain.handle('get-access-token', (): string | null => {
      // User requests jwt tokens
      try {
        // the getTokens verifies if user is authenticated
        const accessToken = JwtAuthManager.getAccessToken();
        if (mainWindow) {
          return accessToken;
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error('An unknown error occurred');
        }
      }

      return null;
    });

    ipcMain.handle('get-refresh-token', (): string | null => {
      // User requests jwt tokens
      try {
        // the getTokens verifies if user is authenticated
        const refreshToken = JwtAuthManager.getRefreshToken();
        if (mainWindow) {
          return refreshToken;
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error('An unknown error occurred');
        }
      }

      return null;
    });

    ipcMain.on('store-jwt-main', (_, jwtAuthTokens: AuthTokens) => {
      // After user has been succesfully authenticated by API service
      // Then store the jwt tokens in the local store
      clearTimeout(currentTimeout);
      JwtAuthManager.setTokens(jwtAuthTokens);
    });

    ipcMain.on('remove-jwt-main', () => {
      // When user logs out, delete jwt tokens
      // TODO: add mutex lock mechanisms to avoid race conditions on set/delete tokens
      // clearTimeout(currentTimeout);
      JwtAuthManager.deleteTokens();
    });

    // ----- REMEMBER ME FEATURE -----
    ipcMain.on('store-remember-username', (_, username: string) => {
      new JsonStore().set(ACCESS_KEYS.REMEMBER_USERNAME, username);
    });

    ipcMain.on('delete-remember-username', () => {
      new JsonStore().delete(ACCESS_KEYS.REMEMBER_USERNAME);
    });

    ipcMain.handle('get-remember-username', (): string | void => {
      const username = new JsonStore().get<string>(ACCESS_KEYS.REMEMBER_USERNAME);
      if (!username) {
        return;
      }
      if (mainWindow) {
        return username;
      }
    });
    // ----- END REMEMBER ME FEATURE -----

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
