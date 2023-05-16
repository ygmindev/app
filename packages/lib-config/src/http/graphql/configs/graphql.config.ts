import { _graphqlConfig } from '@lib/config/http/graphql/_graphql.config';
import type { _GraphqlConfigModel } from '@lib/config/http/graphql/_graphql.models';
import graphqlParamsConfig from '@lib/config/http/graphql/params/graphql.params';

const graphqlConfig: _GraphqlConfigModel = _graphqlConfig(graphqlParamsConfig);

export default graphqlConfig;
