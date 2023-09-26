import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type UseResourceMethodParamsFieldsModel } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type CreditRatingModel } from '#lib-shared/funding/resources/CreditRating/CreditRating.models';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';
import { type ResourceMethodTypeCrudModel } from '#lib-shared/resource/resource.models';

export const CREDIT_RATING_FIELDS = [
  '_id',
  { agency: ['_id'] },
] satisfies GraphQlQueryParamsFieldsModel<CreditRatingModel>;

export const CREDIT_RATING_OUTPUT_FIELDS = [
  { result: CREDIT_RATING_FIELDS },
] satisfies UseResourceMethodParamsFieldsModel<
  ResourceMethodTypeCrudModel,
  CreditRatingModel,
  FundingModel
>;
