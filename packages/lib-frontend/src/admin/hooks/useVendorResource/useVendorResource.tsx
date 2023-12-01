import { VENDOR_FIELDS } from '#lib-frontend/admin/hooks/useVendorResource/useVendorResource.constants';
import { type UseVendorResourceModel } from '#lib-frontend/admin/hooks/useVendorResource/useVendorResource.models';
import { useResource } from '#lib-frontend/resource/hooks/useResource/useResource';
import { VENDOR_RESOURCE_NAME } from '#lib-shared/admin/resources/Vendor/Vendor.constants';
import {
  type VendorFormModel,
  type VendorModel,
} from '#lib-shared/admin/resources/Vendor/Vendor.models';

export const useVendorResource = (): UseVendorResourceModel =>
  useResource<VendorModel, VendorFormModel>({
    fields: [{ result: VENDOR_FIELDS }],
    name: VENDOR_RESOURCE_NAME,
  });
