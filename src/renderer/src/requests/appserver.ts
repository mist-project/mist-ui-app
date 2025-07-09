import BaseRequest, { pb_v1 } from './base';

class AppserverRequest extends BaseRequest {
  public getAppserverRoleListing(appserverId: string): void {
    this.sendMessage(pb_v1.messages.ActionType.ACTION_TYPE_LIST, {
      appserverRolesListing: new pb_v1.appserver.GetAllAppserverRolesRequest({ appserverId })
    });
  }

  public getAppserverDetails(appserverId: string): void {
    this.sendMessage(pb_v1.messages.ActionType.ACTION_TYPE_GET, {
      appserverDetails: new pb_v1.messages.AppserverDetailsRequest({ id: appserverId })
    });
  }

  public createAppserver(name: string): void {
    this.sendMessage(pb_v1.messages.ActionType.ACTION_TYPE_CREATE, {
      createAppserver: new pb_v1.appserver.CreateAppserverRequest({ name })
    });
  }

  // ----- appserver subs -----
  public joinAppserver(appserverId: string): void {
    this.sendMessage(pb_v1.messages.ActionType.ACTION_TYPE_CREATE, {
      joinAppserver: new pb_v1.appserver.CreateAppserverSubRequest({ appserverId })
    });
  }

  public getAppserverUserListing(appserverId: string): void {
    this.sendMessage(pb_v1.messages.ActionType.ACTION_TYPE_GET, {
      appserverUserListing: new pb_v1.appserver.GetAllUsersAppserverSubsRequest({ appserverId })
    });
  }

  // ----- appserver roles -----
  public createAppserverRole(appserverId: string, name: string): void {
    this.sendMessage(pb_v1.messages.ActionType.ACTION_TYPE_CREATE, {
      createAppserverRole: new pb_v1.appserver.CreateAppserverRoleRequest({
        name,
        appserverId
      })
    });
  }

  public deleteAppserver(id: string): void {
    this.sendMessage(pb_v1.messages.ActionType.ACTION_TYPE_DELETE, {
      deleteAppserver: new pb_v1.appserver.DeleteAppserverRequest({ id })
    });
  }
}

export default AppserverRequest;
