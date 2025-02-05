import BaseRequest, { pb_v1 } from './base';

class AppserverRequest extends BaseRequest {
  public getAppserverListing(): void {
    this.sendMesage(pb_v1.messages.ActionType.ACTION_TYPE_LIST, {
      appserverListing: new pb_v1.messages.AppserverListingRequest()
    });
  }

  public getAppserverDetails(appserverId: string): void {
    this.sendMesage(pb_v1.messages.ActionType.ACTION_TYPE_GET, {
      appserverDetails: new pb_v1.messages.AppserverDetailsRequest({ id: appserverId })
    });
  }

  public createAppserver(name: string): void {
    this.sendMesage(pb_v1.messages.ActionType.ACTION_TYPE_CREATE, {
      createAppserver: new pb_v1.server.CreateAppserverRequest({ name })
    });
  }

  public deleteAppserver(id: string): void {
    this.sendMesage(pb_v1.messages.ActionType.ACTION_TYPE_DELETE, {
      deleteAppserver: new pb_v1.server.DeleteAppserverRequest({ id })
    });
  }

  public joinAppserver(appserverId: string): void {
    this.sendMesage(pb_v1.messages.ActionType.ACTION_TYPE_CREATE, {
      joinAppserver: new pb_v1.server.CreateAppserverSubRequest({ appserverId })
    });
  }
}

export default AppserverRequest;
