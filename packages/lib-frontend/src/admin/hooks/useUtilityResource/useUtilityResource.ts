import { UTILITY_FIELDS } from '#lib-frontend/admin/hooks/useUtilityResource/useUtilityResource.constants';
import { type UseUtilityResourceModel } from '#lib-frontend/admin/hooks/useUtilityResource/useUtilityResource.models';
import { useResource } from '#lib-frontend/resource/hooks/useResource/useResource';
import { UTILITY_RESOURCE_NAME } from '#lib-shared/admin/resources/Utility/Utility.constants';
import {
  type UtilityFormModel,
  type UtilityModel,
} from '#lib-shared/admin/resources/Utility/Utility.models';
import { VENDOR_RESOURCE_NAME } from '#lib-shared/admin/resources/Vendor/Vendor.constants';
import { type VendorModel } from '#lib-shared/admin/resources/Vendor/Vendor.models';

export const useUtilityResource = (): UseUtilityResourceModel =>
  useResource<UtilityModel, UtilityFormModel, VendorModel>({
    fields: [{ result: UTILITY_FIELDS }],
    name: UTILITY_RESOURCE_NAME,
    root: VENDOR_RESOURCE_NAME,
  });
