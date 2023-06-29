import {
  type _ServerModel,
  type _ServerParamsModel,
} from '#lib-platform/web/utils/server/_server.models';

export type ServerParamsModel = _ServerParamsModel;

export type ServerModel = Promise<_ServerModel>;
