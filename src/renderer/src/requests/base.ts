import * as pb from '@protos/v1/pb';

export const pb_v1 = pb.api.v1;
export const pb_google = pb.google.protobuf;

class BaseRequest {
  private sender: (_message: Uint8Array) => void;

  constructor(sender: (_message: Uint8Array) => void) {
    this.sender = sender;
  }

  public sendMessage(
    action: pb.api.v1.messages.MessageActionType,
    input: pb.api.v1.messages.IInput
  ): void {
    this.sender(
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
