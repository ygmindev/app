import { graphqlConfig as configBase } from '@lib/config/graphql/graphql.base';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

export const graphqlConfig = configBase.extend(() => ({
  resolvers: filterNil([]),

  schemaFilename: 'main.gql',
}));
