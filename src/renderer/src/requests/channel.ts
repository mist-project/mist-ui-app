import BaseRequest, { pb_v1, pb_google } from './base';

class ChannelRequest extends BaseRequest {
  public createChannel(name: string, appserverId: string): void {
    this.sendMesage(pb_v1.messages.ActionType.ACTION_TYPE_CREATE, {
      createChannel: new pb_v1.channel.CreateChannelRequest({ name, appserverId })
    });
  }

  public channelListing(serverId: string): void {
    this.sendMesage(pb_v1.messages.ActionType.ACTION_TYPE_LIST, {
      channelListing: new pb_v1.channel.ListChannelsRequest({
        appserverId: new pb_google.StringValue({ value: serverId })
      })
    });
  }

  // public deleteChannel(id: string): void {
  //   this.sendMesage(pb_v1.messages.ActionType.ACTION_TYPE_LIST, {
  //     deleteChannel: new pb_v1.server.DeleteChannelRequest({ id: id })
  //   });
  // }
}

export default ChannelRequest;
