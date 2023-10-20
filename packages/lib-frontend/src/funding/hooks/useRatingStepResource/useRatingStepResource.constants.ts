import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type UseResourceMethodParamsFieldsModel } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type RatingStepModel } from '#lib-shared/funding/resources/RatingStep/RatingStep.models';
import { type RatingAgencyModel } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';
import { type ResourceMethodTypeCrudModel } from '#lib-shared/resource/resource.models';

export const RATING_STEP_FIELDS = [
  'name',
] satisfies GraphQlQueryParamsFieldsModel<RatingStepModel>;

export const RATING_STEP_OUTPUT_FIELDS = [
  { result: RATING_STEP_FIELDS },
] satisfies UseResourceMethodParamsFieldsModel<
  ResourceMethodTypeCrudModel,
  RatingStepModel,
  RatingAgencyModel
>;
