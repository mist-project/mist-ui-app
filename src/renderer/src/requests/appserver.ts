import BaseRequest, { pb_v1 } from './base';

class AppserverRequest extends BaseRequest {
  public userServers(): void {
    this.sendMesage(pb_v1.ActionType.ACTION_TYPE_LIST, {
      serverListing: new pb_v1.ServerListingRequest()
    });
  }
}

export default AppserverRequest;
