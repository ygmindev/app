import { type ServerConfigModel } from '@lib/config/server/server.models';

export type _ServerParamsModel = ServerConfigModel & {
  onClose(): Promise<void>;
};

export type _ServerModel = void;
