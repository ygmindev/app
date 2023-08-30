import { useResourceMethod } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { CREDIT_RATING_OUTPUT_FIELDS } from '#lib-frontend/funding/hooks/useCreditRatingResource/useCreditRatingResource.constants';
import {
type  UseCreditRatingResourceModel,
  UseCreditRatingResourceParamsModel,
} from '#lib-frontend/funding/hooks/useCreditRatingResource/useCreditRatingResource.models';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { CREDIT_RATING_RESOURCE_NAME } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import { type CreditRatingFormModel, CreditRatingModel } from '#lib-shared/funding/resources/CreditRating/CreditRating.models';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';

export const useCreditRatingResource = ({
  root
}: UseCreditRatingResourceParamsModel = {}): UseCreditRatingResourceModel => {
  const { query: get } = useResourceMethod<
    RESOURCE_METHOD_TYPE.GET,
    CreditRatingModel,
    CreditRatingFormModel,
    FundingModel,
  >({
    fields: CREDIT_RATING_OUTPUT_FIELDS,
    method: RESOURCE_METHOD_TYPE.GET,
    name: CREDIT_RATING_RESOURCE_NAME,
  });

  return {
    get,
  };
};
