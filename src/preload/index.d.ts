import { ElectronAPI } from '@electron-toolkit/preload';

declare global {
  interface IPCMessages {
    loginJwt: (arg0: any) => void;
  }

  interface Window {
    electron: ElectronAPI;
    api: IPCMessages;
  }
}
