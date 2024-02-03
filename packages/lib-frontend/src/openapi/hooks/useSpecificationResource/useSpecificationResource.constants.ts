import { type GraphQlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type SpecificationModel } from '@lib/shared/openapi/resources/Specification/Specification.models';

export const SPECIFICATION_FIELDS = [
  '_id',
] satisfies GraphQlQueryParamsFieldsModel<SpecificationModel>;
