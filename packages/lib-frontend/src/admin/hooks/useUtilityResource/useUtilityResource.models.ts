import { type UseResourceMethodHookParamsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type UtilityImplementationModel } from '@lib/shared/admin/resources/Utility/UtilityImplementation/UtilityImplementation.models';
import { type VendorModel } from '@lib/shared/admin/resources/Vendor/Vendor.models';

export type UseUtilityResourceParamsModel = UseResourceMethodHookParamsModel<VendorModel>;

export type UseUtilityResourceModel = UtilityImplementationModel;
