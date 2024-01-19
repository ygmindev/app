import {
  type _ServerModel,
  type _ServerParamsModel,
} from '@lib/platform/web/utils/server/_server.models';

export type ServerParamsModel = Omit<_ServerParamsModel, 'onError' | 'onStart'>;

export type ServerModel = _ServerModel;
