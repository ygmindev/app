import { Utility } from '@lib/backend/admin/resources/Utility/Utility';
import { VendorImplementation } from '@lib/backend/admin/resources/Vendor/VendorImplementation/VendorImplementation';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEmbeddedResourceImplementation } from '@lib/backend/resource/utils/createEmbeddedResourceImplementation/createEmbeddedResourceImplementation';
import { UTILITY_RESOURCE_NAME } from '@lib/model/admin/Utility/Utility.constants';
import { type UtilityModel } from '@lib/shared/admin/resources/Utility/Utility.models';
import { type UtilityImplementationModel } from '@lib/shared/admin/resources/Utility/UtilityImplementation/UtilityImplementation.models';
import { type VendorModel } from '@lib/shared/admin/resources/Vendor/Vendor.models';

@withContainer()
export class UtilityImplementation
  extends createEmbeddedResourceImplementation<UtilityModel, VendorModel>({
    Resource: Utility,
    RootImplementation: VendorImplementation,
    name: UTILITY_RESOURCE_NAME,
  })
  implements UtilityImplementationModel {}
