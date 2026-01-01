import { type UseResourceModel } from '@lib/frontend/resource/hooks/useResource/useResource.models';
import { type UseResourceMethodHookParamsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type UtilityModel } from '@lib/model/admin/Utility/Utility.models';
import { type VendorModel } from '@lib/model/admin/Vendor/Vendor.models';

export type UseUtilityResourceParamsModel = UseResourceMethodHookParamsModel<VendorModel>;

export type UseUtilityResourceModel = UseResourceModel<UtilityModel>;
