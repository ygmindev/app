import { type _PubSubConfigModel, type PubSubConfigModel } from '@lib/config/pubSub/pubSub.models';

export const _pubSub = ({ host, port, timeout }: PubSubConfigModel): _PubSubConfigModel => {
  const config: _PubSubConfigModel = { maxReconnectAttempts: 1, timeout, waitOnFirstConnect: true };
  port && (config.port = port);
  host && (config.servers = [host]);
  return config;
};
