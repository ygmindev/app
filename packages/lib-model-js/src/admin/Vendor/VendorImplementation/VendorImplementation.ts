import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { Vendor } from '@lib/model/admin/Vendor/Vendor.entity';
import { VENDOR_RESOURCE_NAME } from '@lib/model/admin/Vendor/Vendor.constants';
import { type VendorModel } from '@lib/model/admin/Vendor/Vendor.models';
import { type VendorImplementationModel } from '@lib/model/admin/Vendor/VendorImplementation/VendorImplementation.models';

@withContainer()
export class VendorImplementation
  extends createEntityResourceImplementation<VendorModel>({
    Resource: Vendor,
    name: VENDOR_RESOURCE_NAME,
  })
  implements VendorImplementationModel {}
