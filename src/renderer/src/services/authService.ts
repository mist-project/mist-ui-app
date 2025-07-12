import { LoginCredentials } from '@renderer/components/Contexts/Auth';
import { AxiosResponse } from 'axios';

import BaseService, { authServiceAxios } from './base';

type TokenResponse = {
  access: string;
  refresh: string;
};

class AuthService extends BaseService {
  constructor() {
    super(authServiceAxios);
  }

  public async login(creds: LoginCredentials): Promise<AxiosResponse<TokenResponse>> {
    const response = await this.post<TokenResponse>(
      '/api/token/',
      {
        email: creds.username,
        password: creds.password
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    return response;
  }

  public async refreshTokens(refreshToken: string): Promise<AxiosResponse<TokenResponse>> {
    const url = `/api/token/refresh/`;
    const response = await this.post<TokenResponse>(
      url,
      {
        refresh: refreshToken
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    return response;
  }
}

export default AuthService;
