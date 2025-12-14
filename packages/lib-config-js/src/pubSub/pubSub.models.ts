import { type LOG_MESSAGE_RESOURCE_NAME } from '@lib/model/logging/LogMessage/LogMessage.constants';
import { type LogMessageModel } from '@lib/model/logging/LogMessage/LogMessage.models';
import { type ConnectionOptions } from 'nats';

export type PubSubConfigModel = {
  host?: string;

  port?: number;

  timeout: number;

  command(config: PubSubConfigModel): string;
};

export type _PubSubConfigModel = ConnectionOptions;

export type RootPubSubSchemaModel = {
  [LOG_MESSAGE_RESOURCE_NAME]: LogMessageModel;
};
