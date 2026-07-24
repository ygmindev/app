import { type UseResourceModel } from '@lib/frontend/resource/hooks/useResource/useResource.models';
import { type UseResourceQueryHookParamsModel } from '@lib/frontend/resource/hooks/useResourceQuery/useResourceQuery.models';
import { type UtilityModel } from '@lib/model/admin/Utility/Utility.models';
import { type VendorModel } from '@lib/model/admin/Vendor/Vendor.models';

export type UseUtilityResourceParamsModel = UseResourceQueryHookParamsModel<VendorModel>;

export type UseUtilityResourceModel = UseResourceModel<UtilityModel>;
