import BaseRequest, { pb_v1 } from './base';

class AuthRequest extends BaseRequest {
  public updateJwtToken(token: string): void {
    this.sendMessage(pb_v1.messages.ActionType.ACTION_TYPE_LIST, {
      updateJwtToken: new pb_v1.messages.UpdateJwtToken({ access: token })
    });
  }
}

export default AuthRequest;
