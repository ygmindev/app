import { type ServerConfigModel } from '@lib/config/server/server.models';

export type _RunServerParamsModel = ServerConfigModel & {
  onClose(): Promise<void>;
  onInitialize(): Promise<void>;
};

export type _RunServerModel = void;
