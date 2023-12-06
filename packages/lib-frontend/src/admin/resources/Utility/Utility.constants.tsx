import { type ResourceParamsModel } from '#lib-frontend/resource/resource.models';
import { UTILITY_RESOURCE_NAME } from '#lib-shared/admin/resources/Utility/Utility.constants';
import { type UtilityModel } from '#lib-shared/admin/resources/Utility/Utility.models';
import { VENDOR_RESOURCE_NAME } from '#lib-shared/admin/resources/Vendor/Vendor.constants';
import { type VendorModel } from '#lib-shared/admin/resources/Vendor/Vendor.models';

export const UTILITY_RESOURCE_PARAMS = {
  fields: [{ id: 'name' }, { id: 'description' }, { id: 'type' }, { id: 'usage' }],
  name: UTILITY_RESOURCE_NAME,
  rootName: VENDOR_RESOURCE_NAME,
} satisfies ResourceParamsModel<UtilityModel, VendorModel>;
