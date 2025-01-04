import * as pb from '@protos/v1/pb';

class Pb {
  public static InputMessage(
    action: pb.api.v1.messages.ActionType,
    input: pb.api.v1.messages.IInput
  ): Uint8Array<ArrayBufferLike> {
    return pb.api.v1.messages.InputMessage.encode(
      new pb.api.v1.messages.InputMessage({
        meta: { action: action },
        input: input
      })
    ).finish();
  }
}

export default Pb;
