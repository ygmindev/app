import { type _PubSubConfigModel, type PubSubConfigModel } from '@lib/config/pubSub/pubSub.models';

export const _pubSub = ({ host, port }: PubSubConfigModel): _PubSubConfigModel => ({
  port,

  servers: [host],
});
