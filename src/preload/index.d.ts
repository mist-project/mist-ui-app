/* eslint-disable no-unused-vars */
import { ElectronAPI } from '@electron-toolkit/preload';

declare global {
  interface jwtTokensParams {
    accessToken: string;
    refreshToken: string;
  }

  interface IPCMessages {
    jwtTokens: (arg0: (message: jwtTokensParams) => void) => void;
    isAuthenticated: (arg0: (message: boolean) => void) => void;
  }

  interface EnvVariables {
    mistApiServiceUrl: string;
  }
  interface Window {
    electron: ElectronAPI;
    api: IPCMessages;
    appEnvs: EnvVariables;
  }
}
