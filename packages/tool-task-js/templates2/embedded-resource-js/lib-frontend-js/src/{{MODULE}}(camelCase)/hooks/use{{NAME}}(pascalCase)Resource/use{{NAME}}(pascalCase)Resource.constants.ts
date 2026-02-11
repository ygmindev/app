import { type GraphqlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { type {{NAME}}(pascalCase)Model } from '@lib/model/{{MODULE}}(camelCase)/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';

export const {{NAME}}(constantCase)_FIELDS = [
  '_id',
] satisfies GraphqlQueryParamsFieldsModel<{{NAME}}(pascalCase)Model>;
