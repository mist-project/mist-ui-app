import BaseRequest, { pb_google, pb_v1 } from './base';

class ChannelRequest extends BaseRequest {
  public createChannel(name: string, appserverId: string): void {
    this.sendMessage(pb_v1.messages.ActionType.ACTION_TYPE_CREATE, {
      createChannel: new pb_v1.channel.CreateChannelRequest({ name, appserverId })
    });
  }

  public channelListing(serverId: string): void {
    this.sendMessage(pb_v1.messages.ActionType.ACTION_TYPE_LIST, {
      channelListing: new pb_v1.channel.ListChannelsRequest({
        appserverId: new pb_google.StringValue({ value: serverId })
      })
    });
  }

  // public deleteChannel(id: string): void {
  //   this.sendMessage(pb_v1.messages.ActionType.ACTION_TYPE_LIST, {
  //     deleteChannel: new pb_v1.appserver.DeleteChannelRequest({ id: id })
  //   });
  // }
}

export default ChannelRequest;
