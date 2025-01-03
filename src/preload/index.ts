import { contextBridge, ipcRenderer } from 'electron';
import { electronAPI } from '@electron-toolkit/preload';

type jwtTokensParams = {
  access: string;
  refresh: string;
};

type JwtTokensCallback = (_arg0: jwtTokensParams) => void;

type ApiMessages = {
  jwtTokens: (_arg0: JwtTokensCallback) => void;
  isAuthenticated: (_arg0: (_arg0: boolean) => void) => void;
};

// Custom APIs for renderer
const api = {
  jwtTokens: (callback: JwtTokensCallback) =>
    ipcRenderer.on('jwt-tokens', (_event, value) => callback(value)),

  isAuthenticated: (callback) => ipcRenderer.on('is-authenticated', (_, value) => callback(value))
} as ApiMessages;

const getEnv = (key: string, strict: boolean = false): string | undefined => {
  const value = process.env[key];
  if (!value && strict) {
    throw new Error(`Error: key ${key} is undefined.`);
  }
  return value;
};

const appEnvs = {
  mistApiServiceUrl: getEnv('MIST_API_SERVICE_URL', true),
  mistIOServiceUrl: getEnv('MIST_IO_SERVICE_URL', true)
};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI);
    contextBridge.exposeInMainWorld('api', api);
    contextBridge.exposeInMainWorld('appEnvs', appEnvs);
  } catch (error) {
    console.error(error);
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.api = api;
  // @ts-ignore (define in dts)
  window.appEnvs = appEnvs;
}
