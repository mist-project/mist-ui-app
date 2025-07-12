import { TokenManager } from '@renderer/components/Contexts/Auth/AuthContext';
import { ApiResponse, Channel } from '@renderer/types';
import { AxiosResponse } from 'axios';

import BaseService, { apiServiceAxios } from './base';

const CHANNEL_ROUTES = {
  CREATE: '/api/v1/channels'
};

export interface ChannelCreateResponse extends Channel {}

class ChannelService extends BaseService {
  constructor(tokenManager: TokenManager) {
    super(apiServiceAxios, tokenManager);
  }

  public async createChannel(
    name: string,
    appserverId: string,
    isPrivate: boolean = false
  ): Promise<AxiosResponse<ApiResponse<ChannelCreateResponse>>> {
    const response = await this.post<ApiResponse<ChannelCreateResponse>>(CHANNEL_ROUTES.CREATE, {
      name,
      appserver_id: appserverId,
      is_private: isPrivate
    });

    return response;
  }
}

export default ChannelService;
