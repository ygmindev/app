import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { {{NAME}}(constantCase)_RESOURCE_NAME } from '@lib/model/{{MODULE}}(camelCase)/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).constants';
import { type {{NAME}}(pascalCase)Model } from '@lib/model/{{MODULE}}(camelCase)/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';

export const {{NAME}}(constantCase)_RESOURCE_PARAMS = {
  fields: [],
  name: {{NAME}}(constantCase)_RESOURCE_NAME,
} satisfies ResourceParamsModel<{{NAME}}(pascalCase)Model>;
