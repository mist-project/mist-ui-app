import { TokenManager } from '@renderer/components/Contexts/Auth/AuthContext';
import { ApiResponse, Appserver, AppserverRole, Channel } from '@renderer/types';
import { AxiosResponse } from 'axios';

import BaseService, { apiServiceAxios } from './base';

const APPSERVER_ROUTES = {
  CREATE: '/api/v1/appservers',
  LISTING: '/api/v1/appservers',
  DELETE: '/api/v1/appservers'
};

export type AppserverCreateResposne = {
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
  ): Promise<AxiosResponse<ApiResponse<AppserverCreateResposne>>> {
    const response = await this.post<ApiResponse<AppserverCreateResposne>>(
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

  // public getAppserverRoleListing(appserverId: string): void {
  //   this.sendMessage(pb_v1.messages.ActionType.ACTION_TYPE_LIST, {
  //     appserverRolesListing: new pb_v1.appserver.GetAllAppserverRolesRequest({ appserverId })
  //   });
  // }

  // public getAppserverDetails(appserverId: string): void {
  //   this.sendMessage(pb_v1.messages.ActionType.ACTION_TYPE_GET, {
  //     appserverDetails: new pb_v1.messages.AppserverDetailsRequest({ id: appserverId })
  //   });
  // }

  // public createAppserver(name: string): void {
  //   this.sendMessage(pb_v1.messages.ActionType.ACTION_TYPE_CREATE, {
  //     createAppserver: new pb_v1.appserver.CreateAppserverRequest({ name })
  //   });
  // }

  // // ----- appserver subs -----
  // public joinAppserver(appserverId: string): void {
  //   this.sendMessage(pb_v1.messages.ActionType.ACTION_TYPE_CREATE, {
  //     joinAppserver: new pb_v1.appserver.CreateAppserverSubRequest({ appserverId })
  //   });
  // }

  // public getAppserverUserListing(appserverId: string): void {
  //   this.sendMessage(pb_v1.messages.ActionType.ACTION_TYPE_GET, {
  //     appserverUserListing: new pb_v1.appserver.GetAllUsersAppserverSubsRequest({ appserverId })
  //   });
  // }

  // // ----- appserver roles -----
  // public createAppserverRole(appserverId: string, name: string): void {
  //   this.sendMessage(pb_v1.messages.ActionType.ACTION_TYPE_CREATE, {
  //     createAppserverRole: new pb_v1.appserver.CreateAppserverRoleRequest({
  //       name,
  //       appserverId
  //     })
  //   });
  // }

  // public deleteAppserver(id: string): void {
  //   this.sendMessage(pb_v1.messages.ActionType.ACTION_TYPE_DELETE, {
  //     deleteAppserver: new pb_v1.appserver.DeleteAppserverRequest({ id })
  //   });
  // }
}

export default AppserverService;
