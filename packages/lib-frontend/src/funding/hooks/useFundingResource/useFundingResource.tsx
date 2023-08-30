import { FUNDING_FIELDS } from '#lib-frontend/funding/hooks/useFundingResource/useFundingResource.constants';
import { type UseFundingResourceModel } from '#lib-frontend/funding/hooks/useFundingResource/useFundingResource.models';
import { useResource } from '#lib-frontend/resource/hooks/useResource/useResource';
import { FUNDING_RESOURCE_NAME } from '#lib-shared/funding/resources/Funding/Funding.constants';
import {
  type FundingFormModel,
  type FundingModel,
} from '#lib-shared/funding/resources/Funding/Funding.models';

export const useFundingResource = (): UseFundingResourceModel =>
  useResource<FundingModel, FundingFormModel>({
    fields: [{ result: FUNDING_FIELDS }],
    name: FUNDING_RESOURCE_NAME,
  });
