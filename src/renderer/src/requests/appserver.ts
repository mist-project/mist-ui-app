import BaseRequest, { pb_v1 } from './base';

class AppserverRequest extends BaseRequest {
  public getAppserverListing(): void {
    this.sendMesage(pb_v1.messages.ActionType.ACTION_TYPE_LIST, {
      appserverListing: new pb_v1.messages.AppserverListingRequest()
    });
  }

  public getAppserverDetails(appserverId: string): void {
    this.sendMesage(pb_v1.messages.ActionType.ACTION_TYPE_LIST, {
      appserverDetails: new pb_v1.messages.AppserverDetailsRequest({ id: appserverId })
    });
  }

  public createAppserver(name: string): void {
    this.sendMesage(pb_v1.messages.ActionType.ACTION_TYPE_LIST, {
      createAppserver: new pb_v1.server.CreateAppserverRequest({ name: name })
    });
  }

  public deleteAppserver(id: string): void {
    this.sendMesage(pb_v1.messages.ActionType.ACTION_TYPE_LIST, {
      deleteAppserver: new pb_v1.server.DeleteAppserverRequest({ id: id })
    });
  }
}

export default AppserverRequest;
