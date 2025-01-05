import BaseRequest, { pb_v1 } from './base';

class AppserverRequest extends BaseRequest {
  public getAppserverListing(): void {
    this.sendMesage(pb_v1.ActionType.ACTION_TYPE_LIST, {
      appserverListing: new pb_v1.AppserverListingRequest()
    });
  }

  public createAppserver(name: string): void {
    this.sendMesage(pb_v1.ActionType.ACTION_TYPE_LIST, {
      createAppserver: new pb_v1.CreateAppserverRequest({ name: name })
    });
  }
}

export default AppserverRequest;
