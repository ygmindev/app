import { Vendor } from '@lib/backend/admin/resources/Vendor/Vendor';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceService } from '@lib/backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { VENDOR_RESOURCE_NAME } from '@lib/shared/admin/resources/Vendor/Vendor.constants';
import {
  type VendorFormModel,
  type VendorModel,
} from '@lib/shared/admin/resources/Vendor/Vendor.models';
import { type VendorServiceModel } from '@lib/shared/admin/resources/Vendor/VendorService/VendorService.models';

@withContainer({ name: `${VENDOR_RESOURCE_NAME}Service` })
export class VendorService
  extends createEntityResourceService<VendorModel, VendorFormModel>({
    Resource: Vendor,
    name: VENDOR_RESOURCE_NAME,
  })
  implements VendorServiceModel {}
