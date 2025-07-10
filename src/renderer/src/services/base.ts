import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import * as pb from '@protos/v1/pb';
import { TokenManager } from '@renderer/components/Contexts/Auth/AuthContext';

export const pb_v1 = pb.api.v1;
export const pb_google = pb.google.protobuf;

const apiServiceUrl = window.appEnvs.mistApiServiceUrl;

// TODO: add support to http and https
const ioServiceUrl = `http://${window.appEnvs.mistIOServiceUrl}`;
const authServiceUrl = window.appEnvs.mistAuthServiceUrl;

export const apiServiceAxios = axios.create({
  baseURL: apiServiceUrl
});

export const ioServiceAxios = axios.create({
  baseURL: ioServiceUrl
});

export const authServiceAxios = axios.create({
  baseURL: authServiceUrl
});

class BaseService {
  protected tokenManager?: TokenManager;
  protected api: AxiosInstance;

  constructor(api: AxiosInstance, tokenManager: TokenManager | undefined = undefined) {
    this.tokenManager = tokenManager;
    this.api = api;
  }

  private async buildHeaders(
    customHeaders?: AxiosRequestConfig['headers']
  ): Promise<Record<string, string>> {
    const token = await this.tokenManager?.getAccessToken();
    const normalizedHeaders: Record<string, string> = {};

    if (customHeaders) {
      for (const [key, value] of Object.entries(customHeaders)) {
        if (typeof value === 'string') {
          normalizedHeaders[key] = value;
        } else if (value !== undefined && value !== null) {
          normalizedHeaders[key] = String(value); // coerce other types
        }
      }
    }

    return {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...normalizedHeaders
    };
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    const headers = await this.buildHeaders(config?.headers);

    try {
      return await this.api.get<T>(url, { ...config, headers });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        const refreshed = await this.attemptRefreshToken();

        if (refreshed) {
          const newHeaders = await this.buildHeaders(config?.headers);
          return await this.api.get<T>(url, { ...config, headers: newHeaders });
        }
      }

      this.errorHandler(error);
      throw error;
    }
  }

  public async post<T>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    const headers = await this.buildHeaders(config?.headers);

    try {
      return await this.api.post<T>(url, data, { ...config, headers });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        const refreshed = await this.attemptRefreshToken();

        if (refreshed) {
          const newHeaders = await this.buildHeaders(config?.headers);
          return await this.api.post<T>(url, data, { ...config, headers: newHeaders });
        }
      }

      this.errorHandler(error);
      throw error;
    }
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    const headers = await this.buildHeaders(config?.headers);

    try {
      return await this.api.delete<T>(url, { ...config, headers });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        const refreshed = await this.attemptRefreshToken();

        if (refreshed) {
          const newHeaders = await this.buildHeaders(config?.headers);
          return await this.api.delete<T>(url, { ...config, headers: newHeaders });
        }
      }

      this.errorHandler(error);
      throw error;
    }
  }

  private async errorHandler(error: unknown): Promise<void> {
    if (axios.isAxiosError(error)) {
      // Handle Axios-specific errors
      console.error('Axios error:', error.message);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
      }
    } else {
      // Handle other types of errors
      console.error('Unexpected error:', error);
    }
  }

  private async attemptRefreshToken(): Promise<boolean> {
    if (this.tokenManager) {
      try {
        if (await this.tokenManager.refreshTokens()) {
          return true;
        }
      } catch (error) {
        console.error('Failed to refresh token:', error);
      }
    } else {
      console.warn('No token manager available to refresh token.');
    }

    return false;
  }
}

export default BaseService;
