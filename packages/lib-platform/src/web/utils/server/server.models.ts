import type {
  _ServerModel,
  _ServerParamsModel,
} from '#lib-platform/web/utils/server/_server.models';

export interface ServerParamsModel extends _ServerParamsModel {}

export type ServerModel = Promise<_ServerModel>;
