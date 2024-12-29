import { contextBridge, ipcRenderer } from 'electron';
import { electronAPI } from '@electron-toolkit/preload';

interface LoginJwtParams {
  accessToken: string;
  refreshToken: string;
}

type JwtTokensCallback = (arg0: LoginJwtParams) => void;

interface ApiMessages {
  loginJwt: (arg0: JwtTokensCallback) => void;
}

// Custom APIs for renderer
const api = {
  loginJwt: (callback: JwtTokensCallback) =>
    ipcRenderer.on('login-jwt', (_event, value) => callback(value))
} as ApiMessages;

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI);
    contextBridge.exposeInMainWorld('api', api);
  } catch (error) {
    console.error(error);
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.api = api;
}
