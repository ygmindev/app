import { useResourceMethod } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { {{NAME}}(constantCase)_OUTPUT_FIELDS } from '@lib/frontend/{{MODULE}}(camelCase)/hooks/use{{NAME}}(pascalCase)Resource/use{{NAME}}(pascalCase)Resource.constants';
import type { Use{{NAME}}(pascalCase)ResourceModel } from '@lib/frontend/{{MODULE}}(camelCase)/hooks/use{{NAME}}(pascalCase)Resource/use{{NAME}}(pascalCase)Resource.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { {{NAME}}(constantCase)_RESOURCE_NAME } from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).constants';
import type { {{NAME}}(pascalCase)FormModel, {{NAME}}(pascalCase)Model } from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';

export const use{{NAME}}(pascalCase)Resource = (): Use{{NAME}}(pascalCase)ResourceModel => {
  const { query: get } = useResourceMethod<
    RESOURCE_METHOD_TYPE.GET,
    {{NAME}}(pascalCase)Model,
    {{NAME}}(pascalCase)FormModel,
  >({
    fields: [{ result: {{NAME}}(constantCase)_OUTPUT_FIELDS }],
    method: RESOURCE_METHOD_TYPE.GET,
    name: {{NAME}}(constantCase)_RESOURCE_NAME,
  });

  return {
    get,
  };
};
