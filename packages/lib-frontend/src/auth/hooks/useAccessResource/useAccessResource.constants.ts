import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type AccessModel } from '#lib-shared/auth/resources/Access/Access.models';

export const ACCESS_FIELDS = ['_id', 'role'] satisfies GraphQlQueryParamsFieldsModel<AccessModel>;
