import * as pb from '@protos/v1/pb';
import { TokenManager } from '@renderer/components/Contexts/Auth/AuthContext';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export const pb_v1 = pb.api.v1;
export const pb_google = pb.google.protobuf;

const apiServiceUrl = window.appEnvs.mistApiServiceUrl;

const sharedAxios = axios.create({
  baseURL: apiServiceUrl
});

class BaseRequest {
  private sender: (_message: Uint8Array) => void;
  protected tokenManager?: TokenManager;
  protected api: AxiosInstance;

  constructor(sender: (_message: Uint8Array) => void, tokenManager?: TokenManager) {
    this.sender = sender;
    this.tokenManager = tokenManager;
    this.api = sharedAxios;
  }

  public sendMessage(
    action: pb.api.v1.messages.ActionType,
    input: pb.api.v1.messages.IInput
  ): void {
    this.sender(
      pb.api.v1.messages.InputMessage.encode(
        new pb.api.v1.messages.InputMessage({
          meta: { action: action },
          input: input
        })
      ).finish()
    );
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

  protected async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const headers = await this.buildHeaders(config?.headers);

    try {
      const response = await this.api.get<T>(url, { ...config, headers });
      return response.data;
    } catch (error) {
      throw new Error(
        `GET request to ${url} failed: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }
}

export default BaseRequest;
