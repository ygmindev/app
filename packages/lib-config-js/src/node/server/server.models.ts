import { type ServerParamsModel } from '@lib/backend/server/utils/Server/Server.models';
import { type GraphqlConfigModel } from '@lib/config/graphql/graphql.models';

export type ServerConfigModel = ServerParamsModel<Array<unknown>> & {
  entryPathname: string;

  graphqlConfig?: GraphqlConfigModel;
};

export type _ServerConfigModel = ServerConfigModel;
