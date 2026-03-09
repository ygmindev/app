import { graphqlConfig as configBase } from '@lib/config/graphql/graphql.base';
import { UtilityResolver } from '@lib/model/admin/Utility/UtilityResolver/UtilityResolver';
import { VendorResolver } from '@lib/model/admin/Vendor/VendorResolver/VendorResolver';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

export const graphqlConfig = configBase.extend(() => ({
  resolvers: filterNil([VendorResolver, UtilityResolver]),

  schemaFilename: 'admin.gql',
}));
