import { type UseResourceMethodHookParamsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type UtilityImplementationModel } from '@lib/model/admin/Utility/UtilityImplementation/UtilityImplementation.models';
import { type VendorModel } from '@lib/model/admin/Vendor/Vendor.models';

export type UseUtilityResourceParamsModel = UseResourceMethodHookParamsModel<VendorModel>;

export type UseUtilityResourceModel = UtilityImplementationModel;
