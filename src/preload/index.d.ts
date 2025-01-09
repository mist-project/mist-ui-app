import { ElectronAPI } from '@electron-toolkit/preload';

declare global {
  interface jwtTokensParams {
    access: string;
    refresh: string;
  }

  interface IPCMessages {
    jwtTokens: (_arg0: (_message: jwtTokensParams) => void) => void;
    isAuthenticated: (_arg0: (_message: boolean) => void) => void;
    getRememberUsername: (_arg0: (username: string) => void) => void;
  }

  interface EnvVariables {
    mistApiServiceUrl: string;
    mistIOServiceUrl: string;
  }
  interface Window {
    electron: ElectronAPI;
    api: IPCMessages;
    appEnvs: EnvVariables;
  }
}
