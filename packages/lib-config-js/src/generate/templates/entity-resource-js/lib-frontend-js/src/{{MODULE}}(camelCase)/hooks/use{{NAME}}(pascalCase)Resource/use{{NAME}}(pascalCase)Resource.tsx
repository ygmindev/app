import { type Use{{NAME}}(pascalCase)ResourceModel } from '@lib/frontend/{{MODULE}}(camelCase)/hooks/use{{NAME}}(pascalCase)Resource/use{{NAME}}(pascalCase)Resource.models';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import {
  type {{NAME}}(pascalCase)Model,
} from '@lib/model/{{MODULE}}(camelCase)/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import { {{NAME}}(constantCase)_RESOURCE_PARAMS } from '@lib/frontend/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).constants';

export const use{{NAME}}(pascalCase)Resource = (): Use{{NAME}}(pascalCase)ResourceModel =>
  useResource<{{NAME}}(pascalCase)Model>({
    ...{{NAME}}(constantCase)_RESOURCE_PARAMS,
  });
