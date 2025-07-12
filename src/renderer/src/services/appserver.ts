import { TokenManager } from '@renderer/components/Contexts/Auth/AuthContext';
import { ApiResponse, Appserver, AppserverRole, Channel } from '@renderer/types';
import { AxiosResponse } from 'axios';

import BaseService, { apiServiceAxios } from './base';

const APPSERVER_ROUTES = {
  CREATE: '/api/v1/appservers',
  LISTING: '/api/v1/appservers',
  DELETE: '/api/v1/appservers'
};

export type AppserverCreateResponse = {
  appserver: Appserver;
};

export type AppserverListingResponse = {
  appserver: Appserver;
  sub_id: string;
};

export interface AppserverDetailsResponse extends Appserver {
  channels: Channel[];
  roles: AppserverRole[];
}

class AppserverService extends BaseService {
  constructor(tokenManager: TokenManager) {
    super(apiServiceAxios, tokenManager);
  }

  public async createAppserver(
    name: string
  ): Promise<AxiosResponse<ApiResponse<AppserverCreateResponse>>> {
    const response = await this.post<ApiResponse<AppserverCreateResponse>>(
      APPSERVER_ROUTES.CREATE,
      { name }
    );

    return response;
  }

  public async getAppserverListing(): Promise<
    AxiosResponse<ApiResponse<AppserverListingResponse[]>>
  > {
    const response = await this.get<ApiResponse<AppserverListingResponse[]>>(
      APPSERVER_ROUTES.LISTING
    );

    return response;
  }

  public async getAppserverDetails(
    appserverId: string
  ): Promise<AxiosResponse<ApiResponse<AppserverDetailsResponse>>> {
    const response = await this.get<ApiResponse<AppserverDetailsResponse>>(
      `${APPSERVER_ROUTES.LISTING}/${appserverId}`
    );

    return response;
  }

  public async deleteAppserver(appserverId: string): Promise<AxiosResponse<ApiResponse<void>>> {
    const response = await this.delete<ApiResponse<void>>(
      `${APPSERVER_ROUTES.LISTING}/${appserverId}`
    );

    return response;
  }

  public async deleteChannel(channel: Channel): Promise<AxiosResponse<ApiResponse<void>>> {
    const response = await this.delete<ApiResponse<void>>(
      `${APPSERVER_ROUTES.DELETE}/${channel.appserver_id}/channels/${channel.id}`
    );

    return response;
  }
}

export default AppserverService;
