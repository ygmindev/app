import { Utility } from '@lib/backend/admin/resources/Utility/Utility';
import { VendorService } from '@lib/backend/admin/resources/Vendor/VendorService/VendorService';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEmbeddedResourceService } from '@lib/backend/resource/utils/createEmbeddedResourceService/createEmbeddedResourceService';
import { UTILITY_RESOURCE_NAME } from '@lib/shared/admin/resources/Utility/Utility.constants';
import {
  type UtilityFormModel,
  type UtilityModel,
} from '@lib/shared/admin/resources/Utility/Utility.models';
import { type UtilityServiceModel } from '@lib/shared/admin/resources/Utility/UtilityService/UtilityService.models';
import {
  type VendorFormModel,
  type VendorModel,
} from '@lib/shared/admin/resources/Vendor/Vendor.models';

@withContainer()
export class UtilityService
  extends createEmbeddedResourceService<
    UtilityModel,
    UtilityFormModel,
    VendorModel,
    VendorFormModel
  >({
    Resource: Utility,
    RootService: VendorService,
    name: UTILITY_RESOURCE_NAME,
  })
  implements UtilityServiceModel {}
