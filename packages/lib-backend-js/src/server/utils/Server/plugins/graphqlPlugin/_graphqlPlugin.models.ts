import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import { type ApiEndpointModel } from '@lib/config/api/api.models';
import { type GraphqlConfigModel } from '@lib/config/graphql/graphql.models';
import { type LoggerModel } from '@lib/shared/logging/utils/Logger/Logger.models';

export type _GraphqlPluginModel = ServerPluginModel<
  Pick<ApiEndpointModel<unknown, unknown>, 'pathname'> & {
    config: GraphqlConfigModel;
    logger?: LoggerModel;
  }
>;
