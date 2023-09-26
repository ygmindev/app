import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type RatingAgencyModel } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';

export const RATING_AGENCY_FIELDS = [
  '_id',
  'name',
] satisfies GraphQlQueryParamsFieldsModel<RatingAgencyModel>;
