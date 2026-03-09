import { graphqlConfig as configBase } from '@lib/config/graphql/graphql.kfn';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

export const graphqlConfig = configBase.extend(() => ({
  resolvers: filterNil([]),
}));
