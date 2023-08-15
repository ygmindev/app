import { {{NAME}}(constantCase)_FIELDS } from '#lib-frontend/{{MODULE}}(camelCase)/hooks/use{{NAME}}(pascalCase)Resource/use{{NAME}}(pascalCase)Resource.constants';
import { type Use{{NAME}}(pascalCase)ResourceModel } from '#lib-frontend/{{MODULE}}(camelCase)/hooks/use{{NAME}}(pascalCase)Resource/use{{NAME}}(pascalCase)Resource.models';
import { useResourceMethod } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { {{NAME}}(constantCase)_RESOURCE_NAME } from '#lib-shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).constants';
import {
  type {{NAME}}(pascalCase)FormModel,
  type {{NAME}}(pascalCase)Model,
} from '#lib-shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';

export const use{{NAME}}(pascalCase)Resource = (): Use{{NAME}}(pascalCase)ResourceModel => {
  const { query: create } = useResourceMethod<
    RESOURCE_METHOD_TYPE.CREATE,
    {{NAME}}(pascalCase)Model,
    {{NAME}}(pascalCase)FormModel
  >({
    fields: {{NAME}}(constantCase)_FIELDS,
    method: RESOURCE_METHOD_TYPE.CREATE,
    name: {{NAME}}(constantCase)_RESOURCE_NAME,
  });
  return { create };
};
