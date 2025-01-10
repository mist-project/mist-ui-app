import BaseRequest, { pb_v1 } from './base';

class ChannelRequest extends BaseRequest {
  public createChannel(name: string, appserverId: string): void {
    this.sendMesage(pb_v1.messages.ActionType.ACTION_TYPE_LIST, {
      createChannel: new pb_v1.channel.CreateChannelRequest({ name, appserverId })
    });
  }

  // public deleteChannel(id: string): void {
  //   this.sendMesage(pb_v1.messages.ActionType.ACTION_TYPE_LIST, {
  //     deleteChannel: new pb_v1.server.DeleteChannelRequest({ id: id })
  //   });
  // }
}

export default ChannelRequest;
