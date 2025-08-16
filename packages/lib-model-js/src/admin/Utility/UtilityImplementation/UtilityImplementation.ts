import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEmbeddedResourceImplementation } from '@lib/backend/resource/utils/createEmbeddedResourceImplementation/createEmbeddedResourceImplementation';
import { Utility } from '@lib/model/admin/Utility/Utility.entity';
import { UTILITY_RESOURCE_NAME } from '@lib/model/admin/Utility/Utility.constants';
import { type UtilityModel } from '@lib/model/admin/Utility/Utility.models';
import { type UtilityImplementationModel } from '@lib/model/admin/Utility/UtilityImplementation/UtilityImplementation.models';
import { type VendorModel } from '@lib/model/admin/Vendor/Vendor.models';
import { VendorImplementation } from '@lib/model/admin/Vendor/VendorImplementation/VendorImplementation';

@withContainer()
export class UtilityImplementation
  extends createEmbeddedResourceImplementation<UtilityModel, VendorModel>({
    Resource: Utility,
    RootImplementation: VendorImplementation,
    name: UTILITY_RESOURCE_NAME,
  })
  implements UtilityImplementationModel {}
