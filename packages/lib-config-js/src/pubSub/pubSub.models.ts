import { type ConnectionOptions } from 'nats';

export type PubSubConfigModel = {
  host: string;

  port: number;

  command(config: PubSubConfigModel): string;
};

export type _PubSubConfigModel = ConnectionOptions;
