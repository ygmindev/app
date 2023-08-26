import { FUNDING_FIELDS } from '#lib-frontend/funding/hooks/useFundingResource/useFundingResource.constants';
import { type UseFundingResourceModel } from '#lib-frontend/funding/hooks/useFundingResource/useFundingResource.models';
import { useResourceMethod } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { FUNDING_RESOURCE_NAME } from '#lib-shared/funding/resources/Funding/Funding.constants';
import {
  type FundingFormModel,
  type FundingModel,
} from '#lib-shared/funding/resources/Funding/Funding.models';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';

export const useFundingResource = (): UseFundingResourceModel => {
  const { query: create } = useResourceMethod<
    RESOURCE_METHOD_TYPE.CREATE,
    FundingModel,
    FundingFormModel
  >({
    fields: FUNDING_FIELDS,
    method: RESOURCE_METHOD_TYPE.CREATE,
    name: FUNDING_RESOURCE_NAME,
  });
  return { create };
};
