import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type UseResourceMethodParamsFieldsModel } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type {{NAME}}(pascalCase)Model } from '#lib-shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import { type ResourceMethodTypeCrudModel } from '#lib-shared/resource/resource.models';

export const {{NAME}}(constantCase)_FIELDS: GraphQlQueryParamsFieldsModel<{{NAME}}(pascalCase)Model> = ['_id'];

export const {{NAME}}(constantCase)_OUTPUT_FIELDS: UseResourceMethodParamsFieldsModel<
  ResourceMethodTypeCrudModel,
  {{NAME}}(pascalCase)Model
> = [{ result: {{NAME}}(constantCase)_FIELDS }];
