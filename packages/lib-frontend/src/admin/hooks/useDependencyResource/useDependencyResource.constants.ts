import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type DependencyModel } from '#lib-shared/admin/resources/Dependency/Dependency.models';

export const DEPENDENCY_FIELDS = [
  '_id',
  'name',
] satisfies GraphQlQueryParamsFieldsModel<DependencyModel>;
