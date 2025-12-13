import { type _PubSubConfigModel, type PubSubConfigModel } from '@lib/config/pubSub/pubSub.models';

export const _pubSub = ({ host, port }: PubSubConfigModel): _PubSubConfigModel => {
  const config: _PubSubConfigModel = {};
  port && (config.port = port);
  host && (config.servers = [host]);
  return config;
};
