import { Utility } from '@lib/backend/admin/resources/Utility/Utility';
import { type UtilityResolverModel } from '@lib/backend/admin/resources/Utility/UtilityResolver/UtilityResolver.models';
import { UtilityImplementation } from '@lib/backend/admin/resources/Utility/UtilityImplementation/UtilityImplementation';
import { Vendor } from '@lib/backend/admin/resources/Vendor/Vendor';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '@lib/backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { UTILITY_RESOURCE_NAME } from '@lib/shared/admin/resources/Utility/Utility.constants';
import {
  type UtilityFormModel,
  type UtilityModel,
} from '@lib/shared/admin/resources/Utility/Utility.models';
import { type VendorModel } from '@lib/shared/admin/resources/Vendor/Vendor.models';

@withContainer()
@withResolver({ Resource: () => Utility })
export class UtilityResolver
  extends createEmbeddedResourceResolver<UtilityModel, UtilityFormModel, VendorModel>({
    Resource: () => Utility,
    ResourceImplementation: UtilityImplementation,
    RootResource: () => Vendor,
    name: UTILITY_RESOURCE_NAME,
  })
  implements UtilityResolverModel {}
