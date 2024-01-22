import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { UTILITY_RESOURCE_NAME } from '@lib/shared/{{MODULE}}(camelCase)/resources/Utility/Utility.constants';
import { {{NAME}}(constantCase)_RESOURCE_NAME } from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).constants';
import { type {{NAME}}(pascalCase)Model } from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';

export const {{NAME}}(constantCase)_RESOURCE_PARAMS = {
  fields: [{ id: '_id' }],
  name: {{NAME}}(constantCase)_RESOURCE_NAME,
} satisfies ResourceParamsModel<{{NAME}}(pascalCase)Model>;
