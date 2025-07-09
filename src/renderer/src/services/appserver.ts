import { AxiosResponse } from 'axios';

import { ApiResponse } from '@renderer/types';
import { TokenManager } from '@renderer/components/Contexts/Auth/AuthContext';
import BaseService, { apiServiceAxios } from './base';

const APPSERVER_ROUTES = {
  LISTING: '/api/v1/appservers/'
};

export type AppserverListingResponse = {
  appserver: {
    id: string;
    name: string;
    is_owner: boolean;
  };
  sub_id: string;
};

class AppserverService extends BaseService {
  constructor(tokenManager: TokenManager) {
    super(apiServiceAxios, tokenManager);
  }

  public async getAppserverListing(): Promise<
    AxiosResponse<ApiResponse<AppserverListingResponse[]>>
  > {
    const response = await this.get<ApiResponse<AppserverListingResponse[]>>(
      APPSERVER_ROUTES.LISTING
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
