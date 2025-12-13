import {
  type _ServerModel,
  type _ServerParamsModel,
} from '@lib/backend/server/utils/Server/_Server.models';
import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import { type DatabaseConfigModel } from '@lib/config/database/database.models';

export type ServerParamsModel<TParams extends Array<unknown>> = _ServerParamsModel & {
  database?: DatabaseConfigModel;
  plugins?: Array<[ServerPluginModel<TParams[number]>, TParams[number]]>;
};

export type ServerModel = _ServerModel;
