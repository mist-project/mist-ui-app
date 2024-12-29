import { ElectronAPI } from '@electron-toolkit/preload';

declare global {
  interface LoginJwtParams {
    accessToken: string;
    refreshToken: string;
  }

  interface IPCMessages {
    loginJwt: (arg0: (message: LoginJwtParams) => void) => void;
  }

  interface Window {
    electron: ElectronAPI;
    api: IPCMessages;
  }
}
