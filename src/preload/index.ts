import { contextBridge, ipcRenderer } from 'electron';
import { electronAPI } from '@electron-toolkit/preload';

type ApiMessages = {
  getRememberUsername: () => Promise<string | void>;
  isAuthenticated: () => Promise<boolean>;
  getAccessToken: () => Promise<string | null>;
  getRefreshToken: () => Promise<string | null>;
};

// Custom APIs for renderer
const api = {
  getRememberUsername: () => ipcRenderer.invoke('get-remember-username'),
  isAuthenticated: () => ipcRenderer.invoke('is-authenticated'),
  getAccessToken: () => ipcRenderer.invoke('get-access-token'),
  getRefreshToken: () => ipcRenderer.invoke('get-refresh-token')
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
  mistAuthServiceUrl: getEnv('MIST_AUTH_SERVICE_URL', true),
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
