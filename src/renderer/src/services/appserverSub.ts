import { TokenManager } from '@renderer/components/Contexts/Auth/AuthContext';
import { ApiResponse, Appserver } from '@renderer/types';
import { AxiosResponse } from 'axios';

import BaseService, { apiServiceAxios } from './base';

const APPSERVER_SUB_ROUTES = {
  CREATE: '/api/v1/appserver-subs',
  LISTING: '/api/v1/appserver-subs',
  DELETE: '/api/v1/appserver-subs'
};

export type AppserverSubCreateResponse = {
  id: string;
  appserver_id: string;
};

export type AppserverListingResponse = {
  appserver: Appserver;
  sub_id: string;
};

class AppserverSubService extends BaseService {
  constructor(tokenManager: TokenManager) {
    super(apiServiceAxios, tokenManager);
  }

  public async joinServer(
    appserverId: string
  ): Promise<AxiosResponse<ApiResponse<AppserverSubCreateResponse>>> {
    const response = await this.post<ApiResponse<AppserverSubCreateResponse>>(
      APPSERVER_SUB_ROUTES.CREATE,
      { appserver_id: appserverId }
    );

    return response;
  }
}

export default AppserverSubService;
