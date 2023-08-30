import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';

export const FUNDING_FIELDS: GraphQlQueryParamsFieldsModel<FundingModel> = ['_id'];
