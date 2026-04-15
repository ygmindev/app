import { graphqlConfig as configBase } from '@lib/config/graphql/graphql.admin';

import { name } from '../../package.json';

export const graphqlConfig = configBase.extend(() => ({
  resolvers: [],

  schemaFilename: `${name}.gql`,
}));
