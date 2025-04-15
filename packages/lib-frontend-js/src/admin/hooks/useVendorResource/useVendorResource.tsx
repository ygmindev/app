import { type UseVendorResourceModel } from '@lib/frontend/admin/hooks/useVendorResource/useVendorResource.models';
import { VENDOR_RESOURCE_PARAMS } from '@lib/frontend/admin/resources/Vendor/Vendor.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { type VendorModel } from '@lib/shared/admin/resources/Vendor/Vendor.models';

export const useVendorResource = (): UseVendorResourceModel =>
  useResource<VendorModel>({
    ...VENDOR_RESOURCE_PARAMS,
  });
