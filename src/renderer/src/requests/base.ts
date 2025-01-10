import * as pb from '@protos/v1/pb';

export const pb_v1 = pb.api.v1;

class BaseRequest {
  private sendMessage: (_message: Uint8Array) => void;

  constructor(sendMessage: (_message: Uint8Array) => void) {
    this.sendMessage = sendMessage;
  }

  public sendMesage(action: pb.api.v1.messages.ActionType, input: pb.api.v1.messages.IInput): void {
    this.sendMessage(
      pb.api.v1.messages.InputMessage.encode(
        new pb.api.v1.messages.InputMessage({
          meta: { action: action },
          input: input
        })
      ).finish()
    );
  }
}

export default BaseRequest;
