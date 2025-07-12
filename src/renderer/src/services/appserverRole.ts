import { TokenManager } from '@renderer/components/Contexts/Auth/AuthContext';
import { ApiResponse, AppserverRole } from '@renderer/types';
import { AxiosResponse } from 'axios';

import BaseService, { apiServiceAxios } from './base';

const CHANNEL_ROUTES = {
  CREATE: '/api/v1/appserver-roles'
};

export interface AppserverRoleCreateResponse extends AppserverRole {}

class AppserverRoleService extends BaseService {
  constructor(tokenManager: TokenManager) {
    super(apiServiceAxios, tokenManager);
  }

  public async createAppserverRole(
    name: string,
    appserverId: string
  ): Promise<AxiosResponse<ApiResponse<AppserverRoleCreateResponse>>> {
    const response = await this.post<ApiResponse<AppserverRoleCreateResponse>>(
      CHANNEL_ROUTES.CREATE,
      {
        name,
        appserver_id: appserverId
      }
    );

    return response;
  }
}

export default AppserverRoleService;
