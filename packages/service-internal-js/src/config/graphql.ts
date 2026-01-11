import { graphqlConfig as configBase } from '@lib/config/graphql/graphql.base';

export const graphqlConfig = configBase.extend(() => ({
  resolvers: [],

  schemaFilename: 'internal.gql',
}));
