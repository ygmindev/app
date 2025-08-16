import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { Vendor } from '@lib/model/admin/Vendor/Vendor.entity';
import { VENDOR_RESOURCE_NAME } from '@lib/model/admin/Vendor/Vendor.constants';
import { type VendorModel } from '@lib/model/admin/Vendor/Vendor.models';
import { VendorImplementation } from '@lib/model/admin/Vendor/VendorImplementation/VendorImplementation';
import { type VendorResolverModel } from '@lib/model/admin/Vendor/VendorResolver/VendorResolver.models';

@withContainer()
@withResolver({ Resource: () => Vendor })
export class VendorResolver
  extends createEntityResourceResolver<VendorModel>({
    Resource: () => Vendor,
    ResourceImplementation: VendorImplementation,
    name: VENDOR_RESOURCE_NAME,
  })
  implements VendorResolverModel {}
