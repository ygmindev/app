import { type UseResourceMethodHookParamsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type UtilityServiceModel } from '@lib/shared/admin/resources/Utility/UtilityService/UtilityService.models';
import { type VendorModel } from '@lib/shared/admin/resources/Vendor/Vendor.models';

export type UseUtilityResourceParamsModel = UseResourceMethodHookParamsModel<VendorModel>;

export type UseUtilityResourceModel = UtilityServiceModel;
