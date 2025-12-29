import { type LOG_MESSAGE_RESOURCE_NAME } from '@lib/model/logging/LogMessage/LogMessage.constants';
import { type LogMessageModel } from '@lib/model/logging/LogMessage/LogMessage.models';
import { type ConnectionOptions } from 'nats';

export type PubSubConfigModel = {
  host?: string;

  port?: number;

  retention?: {
    dirname: string;
    maxAge: number;
    maxRows: number;
    maxSize: number;
    nReplicas: number;
    name: string;
    prefixes: Array<string>;
  };

  retry: number;

  retryInterval: number;

  timeout: number;

  command(config: PubSubConfigModel): string;
};

export type _PubSubConfigModel = ConnectionOptions;

export type RootPubSubSchemaModel = {
  [LOG_MESSAGE_RESOURCE_NAME]: LogMessageModel;
};
