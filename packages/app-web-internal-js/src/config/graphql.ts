import { graphqlConfig as configBase } from '@lib/config/graphql/graphql.base';

import { name } from '../../package.json';

export const graphqlConfig = configBase.extend(() => ({
  resolvers: [],

  schemaFilename: `${name}.gql`,
}));
