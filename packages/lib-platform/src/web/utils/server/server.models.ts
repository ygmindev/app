import type {
  _ServerModel,
  _ServerParamsModel,
} from 'packages/lib-platform/src/web/utils/server/_server.models';

export interface ServerParamsModel extends _ServerParamsModel {}

export type ServerModel = Promise<_ServerModel>;
