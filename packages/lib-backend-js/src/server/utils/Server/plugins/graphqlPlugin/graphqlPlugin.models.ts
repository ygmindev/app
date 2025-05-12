import { type _ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import { type GraphqlConfigModel } from '@lib/config/graphql/graphql.models';
import { type LoggerModel } from '@lib/shared/logging/utils/Logger/Logger.models';

export type GraphqlPluginModel = _ServerPluginModel<{
  config: GraphqlConfigModel;
  logger: LoggerModel;
}>;
