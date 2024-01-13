import { Vendor } from '@lib-backend/admin/resources/Vendor/Vendor';
import { type VendorResolverModel } from '@lib-backend/admin/resources/Vendor/VendorResolver/VendorResolver.models';
import { VendorService } from '@lib-backend/admin/resources/Vendor/VendorService/VendorService';
import { withContainer } from '@lib-backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib-backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib-backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { VENDOR_RESOURCE_NAME } from '@lib-shared/admin/resources/Vendor/Vendor.constants';
import {
  type VendorFormModel,
  type VendorModel,
} from '@lib-shared/admin/resources/Vendor/Vendor.models';

@withContainer()
@withResolver({ Resource: () => Vendor })
export class VendorResolver
  extends createEntityResourceResolver<VendorModel, VendorFormModel>({
    Resource: () => Vendor,
    ResourceService: VendorService,
    name: VENDOR_RESOURCE_NAME,
  })
  implements VendorResolverModel {}
