import { ElectronAPI } from '@electron-toolkit/preload';

declare global {
  interface jwtTokensParams {
    access: string;
    refresh: string;
  }

  interface IPCMessages {
    getRememberUsername: () => Promise<string | void>;
    isAuthenticated: () => Promise<boolean>;
    getAccessToken: () => Promise<string | null>;
    getRefreshToken: () => Promise<string | null>;
  }

  interface EnvVariables {
    mistAuthServiceUrl: string;
    mistIOServiceUrl: string;
  }
  interface Window {
    electron: ElectronAPI;
    api: IPCMessages;
    appEnvs: EnvVariables;
  }
}
