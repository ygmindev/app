import { useResourceMethod } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { {{NAME}}(constantCase)_OUTPUT_FIELDS } from '@lib/frontend/{{MODULE}}(camelCase)/hooks/use{{NAME}}(pascalCase)Resource/use{{NAME}}(pascalCase)Resource.constants';
import type {
  Use{{NAME}}(pascalCase)ResourceModel,
  Use{{NAME}}(pascalCase)ResourceParamsModel,
} from '@lib/frontend/{{MODULE}}(camelCase)/hooks/use{{NAME}}(pascalCase)Resource/use{{NAME}}(pascalCase)Resource.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { {{NAME}}(constantCase)_RESOURCE_NAME } from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).constants';
import type { {{NAME}}(pascalCase)FormModel, {{NAME}}(pascalCase)Model } from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import type { {{NAME_ROOT}}(pascalCase)Model } from '@lib/shared/{{MODULE_ROOT}}(camelCase)/resources/{{NAME_ROOT}}(pascalCase)/{{NAME_ROOT}}(pascalCase).models';

export const use{{NAME}}(pascalCase)Resource = ({
  root
}: Use{{NAME}}(pascalCase)ResourceParamsModel = {}): Use{{NAME}}(pascalCase)ResourceModel => {
  const { query: get } = useResourceMethod<
    RESOURCE_METHOD_TYPE.GET,
    {{NAME}}(pascalCase)Model,
    {{NAME}}(pascalCase)FormModel,
    {{NAME_ROOT}}(pascalCase)Model,
  >({
    fields: {{NAME}}(constantCase)_OUTPUT_FIELDS,
    method: RESOURCE_METHOD_TYPE.GET,
    name: {{NAME}}(constantCase)_RESOURCE_NAME,
  });

  return {
    get,
  };
};
