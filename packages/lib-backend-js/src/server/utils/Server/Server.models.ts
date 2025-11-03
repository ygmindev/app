import {
  type _ServerModel,
  type _ServerParamsModel,
} from '@lib/backend/server/utils/Server/_Server.models';
import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';

export type ServerParamsModel<TParams extends Array<unknown>> = _ServerParamsModel & {
  plugins?: Array<[ServerPluginModel<TParams[number]>, TParams[number]]>;
  onClose?(): Promise<void>;
  onInitialize?(): Promise<void>;
};

export type ServerModel = _ServerModel & {
  _onClose: (() => Promise<void>) | undefined;
  _onInitialize: (() => Promise<void>) | undefined;
};
