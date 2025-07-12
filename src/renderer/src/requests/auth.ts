import BaseRequest, { pb_v1 } from './base';

class AuthRequest extends BaseRequest {
  public updateJwtToken(token: string): void {
    this.sendMessage(pb_v1.messages.MessageActionType.ACTION_TYPE_LIST, {
      update_jwt_token: new pb_v1.messages.UpdateJwtToken({ access: token })
    });
  }
}

export default AuthRequest;
