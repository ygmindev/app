import { type GraphqlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { type UseResourceMethodParamsFieldsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type {{NAME}}(pascalCase)Model } from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import { type {{NAME_ROOT}}(pascalCase)Model } from '@lib/shared/{{MODULE_ROOT}}(camelCase)/resources/{{NAME_ROOT}}(pascalCase)/{{NAME_ROOT}}(pascalCase).models';
import { type ResourceMethodTypeCrudModel } from '@lib/shared/resource/resource.models';

export const {{NAME}}(constantCase)_FIELDS = [
  'name',
] satisfies GraphqlQueryParamsFieldsModel<{{NAME}}(pascalCase)Model>;

export const {{NAME}}(constantCase)_OUTPUT_FIELDS = [
  { result: {{NAME}}(constantCase)_FIELDS },
] satisfies UseResourceMethodParamsFieldsModel<
  ResourceMethodTypeCrudModel,
  {{NAME}}(pascalCase)Model,
  {{NAME_ROOT}}(pascalCase)Model
>;
