import { useProtectedResource } from '#lib-frontend/auth/hooks/useProtectedResource/useProtectedResource';
import { type UseFundingResourceModel } from '#lib-frontend/funding/hooks/useFundingResource/useFundingResource.models';
import { FUNDING_RESOURCE_PARAMS } from '#lib-frontend/funding/resources/Funding/Funding.constants';
import {
  type FundingFormModel,
  type FundingModel,
} from '#lib-shared/funding/resources/Funding/Funding.models';

export const useFundingResource = (): UseFundingResourceModel =>
  useProtectedResource<FundingModel, FundingFormModel>({
    ...FUNDING_RESOURCE_PARAMS,
  });
