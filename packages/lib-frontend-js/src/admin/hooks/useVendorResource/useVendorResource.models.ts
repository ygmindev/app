import { type UseResourceModel } from '@lib/frontend/resource/hooks/useResource/useResource.models';
import { type UtilityModel } from '@lib/model/admin/Utility/Utility.models';
import { type VendorModel } from '@lib/model/admin/Vendor/Vendor.models';

export type UseVendorResourceModel = UseResourceModel<VendorModel, UtilityModel>;
