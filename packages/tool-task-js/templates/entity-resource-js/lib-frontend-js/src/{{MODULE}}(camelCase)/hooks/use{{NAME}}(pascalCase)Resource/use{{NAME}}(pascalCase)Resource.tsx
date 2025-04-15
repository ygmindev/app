import { {{NAME}}(constantCase)_FIELDS } from '@lib/frontend/{{MODULE}}(camelCase)/hooks/use{{NAME}}(pascalCase)Resource/use{{NAME}}(pascalCase)Resource.constants';
import { type Use{{NAME}}(pascalCase)ResourceModel } from '@lib/frontend/{{MODULE}}(camelCase)/hooks/use{{NAME}}(pascalCase)Resource/use{{NAME}}(pascalCase)Resource.models';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { {{NAME}}(constantCase)_RESOURCE_NAME } from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).constants';
import {
  type {{NAME}}(pascalCase)Model,
} from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';

export const use{{NAME}}(pascalCase)Resource = (): Use{{NAME}}(pascalCase)ResourceModel =>
  useResource<{{NAME}}(pascalCase)Model>({
    fields: [{ result: {{NAME}}(constantCase)_FIELDS }],
    name: {{NAME}}(constantCase)_RESOURCE_NAME,
  });
