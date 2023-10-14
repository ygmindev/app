import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type GroupModel } from '#lib-shared/group/resources/Group/Group.models';

export const GROUP_FIELDS = [
  '_id',
  'name',
  'types',
] satisfies GraphQlQueryParamsFieldsModel<GroupModel>;
