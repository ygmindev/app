import { type _PubSubConfigModel, type PubSubConfigModel } from '@lib/config/pubSub/pubSub.models';

export const _pubSub = ({
  host,
  port,
  retry,
  retryInterval,
  timeout,
}: PubSubConfigModel): _PubSubConfigModel => {
  const config: _PubSubConfigModel = {
    maxReconnectAttempts: retry,
    reconnectTimeWait: retryInterval,
    timeout,
  };
  port && (config.port = port);
  host && (config.servers = [host]);
  return config;
};
