import { app, shell, BrowserWindow } from 'electron';
import { join } from 'path';
import path from 'node:path';

import { electronApp, optimizer, is } from '@electron-toolkit/utils';
import icon from '../../resources/icon.png?asset';

import { DeepLinkRouter } from './helpers';

if (process.defaultApp) {
  if (process.argv.length >= 2) {
    app.setAsDefaultProtocolClient('mist-app', process.execPath, [path.resolve(process.argv[1])]);
  }
} else {
  app.setAsDefaultProtocolClient('mist-app');
}

let mainWindow: BrowserWindow | null;

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
      if (process.env.NODE_ENV === 'production') {
        // TODO: remove this in the future;
        window.webContents.openDevTools(); // Open DevTools in production as well
      }
      optimizer.watchWindowShortcuts(window);
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
