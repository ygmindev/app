import {
  type UseUtilityResourceModel,
  type UseUtilityResourceParamsModel,
} from '@lib/frontend/admin/hooks/useUtilityResource/useUtilityResource.models';
import { UTILITY_RESOURCE_PARAMS } from '@lib/frontend/admin/resources/Utility/Utility.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { type UtilityModel } from '@lib/model/admin/Utility/Utility.models';
import { type VendorModel } from '@lib/model/admin/Vendor/Vendor.models';

export const useUtilityResource = ({
  root,
}: UseUtilityResourceParamsModel = {}): UseUtilityResourceModel =>
  useResource<UtilityModel, VendorModel>({
    ...UTILITY_RESOURCE_PARAMS,
    root,
  });
