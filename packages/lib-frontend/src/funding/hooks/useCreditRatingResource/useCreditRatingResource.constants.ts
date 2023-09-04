import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type UseResourceMethodParamsFieldsModel } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type CreditRatingModel } from '#lib-shared/funding/resources/CreditRating/CreditRating.models';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';
import { type ResourceMethodTypeCrudModel } from '#lib-shared/resource/resource.models';

export const CREDIT_RATING_FIELDS: GraphQlQueryParamsFieldsModel<CreditRatingModel> = [
  '_id',
  { agency: ['_id'] },
];

export const CREDIT_RATING_OUTPUT_FIELDS: UseResourceMethodParamsFieldsModel<
  ResourceMethodTypeCrudModel,
  CreditRatingModel,
  FundingModel
> = [{ result: CREDIT_RATING_FIELDS }];
