import Store from 'electron-store';
import { safeStorage } from 'electron';

const ACCESS_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  HAS_STORED_TOKENS: 'has_stored_tokens'
};

export type AuthTokens = {
  access: string;
  refresh: string;
};

export class JsonStore {
  private store: Store;

  constructor() {
    this.store = new Store();
  }

  public set<T>(key: string, value: T): void {
    // Store data without encryption
    this.store.set(key, value);
  }

  // Method to get a value without decryption
  public get<T>(key: string): T | null {
    // Get data without encryption
    return this.store.get(key) as T;
  }

  public delete(key: string): void {
    this.store.delete(key);
  }

  public setEncrypted(key: string, value: string): void {
    const encryptedValue = safeStorage.encryptString(value);
    const stringifiedValue = encryptedValue.toString('base64');
    this.store.set(key, stringifiedValue);
  }

  public getEncrypted(key: string): string | null {
    const stringifiedValue = this.store.get(key) as string | undefined;
    if (!stringifiedValue) {
      return null;
    }
    const encryptedValue = Buffer.from(stringifiedValue, 'base64');
    const decryptedValue = safeStorage.decryptString(encryptedValue);
    return decryptedValue;
  }
}

export class DeepLinkRouter {
  private url: URL | undefined;

  constructor(url: string) {
    try {
      this.url = new URL(url);
    } catch (error) {
      return; // if it cannot parse it as a url ignore
    }
  }

  public handle(): void {
    if (!this.url) return;

    switch (this.url.host) {
      case 'login':
        this.handleLogin(this.url);
        break;
      default:
      // Do nothing
    }
  }

  private handleLogin(url: URL): void {
    // Making the assumption that the data is always sent if we get to here, hence the "as string"
    const accessToken = url.searchParams.get('access_token') as string;
    const refreshToken = url.searchParams.get('refresh_token') as string;

    new JsonStore().setEncrypted(ACCESS_KEYS.ACCESS_TOKEN, accessToken);
    new JsonStore().setEncrypted(ACCESS_KEYS.REFRESH_TOKEN, refreshToken);
  }
}

export class JwtAuthManager {
  public static isAuthenticated(): boolean {
    return new JsonStore().get<string>(ACCESS_KEYS.HAS_STORED_TOKENS) === 'true';
  }
  public static getTokens(): AuthTokens {
    const jsonStore = new JsonStore();

    if (!(jsonStore.get<string>(ACCESS_KEYS.HAS_STORED_TOKENS) === 'true')) {
      throw new Error('Jwt tokens not stored.');
    }

    const access = jsonStore.getEncrypted(ACCESS_KEYS.ACCESS_TOKEN);

    if (access == null) {
      throw new Error('Access token is missing.');
    }

    const refresh = jsonStore.getEncrypted(ACCESS_KEYS.REFRESH_TOKEN);

    if (refresh == null) {
      throw new Error('Refresh token is missing.');
    }

    return { access, refresh };
  }

  public static setTokens(tokens: AuthTokens): void {
    const jsonStore = new JsonStore();
    jsonStore.setEncrypted(ACCESS_KEYS.ACCESS_TOKEN, tokens.access);
    jsonStore.setEncrypted(ACCESS_KEYS.REFRESH_TOKEN, tokens.refresh);
    jsonStore.set(ACCESS_KEYS.HAS_STORED_TOKENS, 'true');
  }

  public static deleteTokens(): void {
    const jsonStore = new JsonStore();
    jsonStore.delete(ACCESS_KEYS.ACCESS_TOKEN);
    jsonStore.delete(ACCESS_KEYS.REFRESH_TOKEN);
    jsonStore.set(ACCESS_KEYS.HAS_STORED_TOKENS, 'false');
  }
}

export class MistApiService {
  public static async refreshToken(token: string): Promise<Response> {
    const baseUrl = process.env.MIST_API_SERVICE_URL;

    const url = `${baseUrl}/api/token/refresh/`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        refresh: token
      })
    }).catch(() => {
      return new Response(JSON.stringify({ error: 'Request failed' }), { status: 500 });
    });

    return response;
  }
}
