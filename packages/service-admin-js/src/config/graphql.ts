import { graphqlConfig as configBase } from '@lib/config/graphql/graphql.admin';

export const graphqlConfig = configBase.extend(() => ({
  schemaFilename: 'admin.gql',
}));
