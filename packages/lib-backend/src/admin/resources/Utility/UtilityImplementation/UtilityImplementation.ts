import { Utility } from '@lib/backend/admin/resources/Utility/Utility';
import { VendorImplementation } from '@lib/backend/admin/resources/Vendor/VendorImplementation/VendorImplementation';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEmbeddedResourceImplementation } from '@lib/backend/resource/utils/createEmbeddedResourceImplementation/createEmbeddedResourceImplementation';
import { UTILITY_RESOURCE_NAME } from '@lib/shared/admin/resources/Utility/Utility.constants';
import {
  type UtilityFormModel,
  type UtilityModel,
} from '@lib/shared/admin/resources/Utility/Utility.models';
import { type UtilityImplementationModel } from '@lib/shared/admin/resources/Utility/UtilityImplementation/UtilityImplementation.models';
import {
  type VendorFormModel,
  type VendorModel,
} from '@lib/shared/admin/resources/Vendor/Vendor.models';

@withContainer()
export class UtilityImplementation
  extends createEmbeddedResourceImplementation<
    UtilityModel,
    UtilityFormModel,
    VendorModel,
    VendorFormModel
  >({
    Resource: Utility,
    RootImplementation: VendorImplementation,
    name: UTILITY_RESOURCE_NAME,
  })
  implements UtilityImplementationModel {}
