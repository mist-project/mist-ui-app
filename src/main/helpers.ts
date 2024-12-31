import Store from 'electron-store';
import { safeStorage } from 'electron';

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

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
  public get<T>(key: string): T {
    // Get data without encryption
    return this.store.get(key) as T;
  }

  public setEncrypted(key: string, value: string): void {
    const encryptedValue = safeStorage.encryptString(value);
    const stringifiedValue = encryptedValue.toString('base64');
    this.store.set(key, stringifiedValue);
  }

  public getEncrypted(key: string): string {
    const stringifiedValue = this.store.get(key) as string;
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

    new JsonStore().setEncrypted(ACCESS_TOKEN_KEY, accessToken);
    new JsonStore().setEncrypted(REFRESH_TOKEN_KEY, refreshToken);
  }
}
