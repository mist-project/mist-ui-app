import BaseRequest, { pb_v1 } from './base';

class AuthRequest extends BaseRequest {
  public updateJwtToken(token: string): void {
    this.sendMesage(pb_v1.ActionType.ACTION_TYPE_LIST, {
      serverListing: new pb_v1.UpdateJwtToken({ access: token })
    });
  }
}

export default AuthRequest;
