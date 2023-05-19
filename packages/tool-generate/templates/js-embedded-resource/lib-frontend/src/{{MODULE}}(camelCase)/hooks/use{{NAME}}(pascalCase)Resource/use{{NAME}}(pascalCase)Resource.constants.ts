import type { GraphQlQueryParamsFieldsModel } from '@lib/frontend/http/utils/graphQlQuery/graphQlQuery.models';
import type { UseResourceMethodParamsFieldsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import type { {{NAME}}(pascalCase)Model } from '@lib/shared/{{MODULE}}(pathCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import type { ResourceMethodTypeCrudModel } from '@lib/shared/resource/resource.models';
import type { {{NAME_ROOT}}(pascalCase)Model } from '@lib/shared/{{MODULE_ROOT}}(camelCase)/resources/{{NAME_ROOT}}(pascalCase)/{{NAME_ROOT}}(pascalCase).models';

export const {{NAME}}(constantCase)_FIELDS: GraphQlQueryParamsFieldsModel<{{NAME}}(pascalCase)Model> = [
  '_id',
];

export const {{NAME}}(constantCase)_OUTPUT_FIELDS: UseResourceMethodParamsFieldsModel<
  ResourceMethodTypeCrudModel,
  {{NAME}}(pascalCase)Model,
  {{NAME_ROOT}}(pascalCase)Model
> = [{ result: {{NAME}}(constantCase)_FIELDS }];
