import { Vendor } from '@lib/backend/admin/resources/Vendor/Vendor';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { VENDOR_RESOURCE_NAME } from '@lib/shared/admin/resources/Vendor/Vendor.constants';
import {
  type VendorFormModel,
  type VendorModel,
} from '@lib/shared/admin/resources/Vendor/Vendor.models';
import { type VendorImplementationModel } from '@lib/shared/admin/resources/Vendor/VendorImplementation/VendorImplementation.models';

@withContainer({ name: `${VENDOR_RESOURCE_NAME}Implementation` })
export class VendorImplementation
  extends createEntityResourceImplementation<VendorModel, VendorFormModel>({
    Resource: Vendor,
    name: VENDOR_RESOURCE_NAME,
  })
  implements VendorImplementationModel {}
