import { type UseResourceModel } from '@lib/frontend/resource/hooks/useResource/useResource.models';
import {
    type {{NAME}}(pascalCase)Model,
  } from '@lib/model/{{MODULE}}(camelCase)/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';

export type Use{{NAME}}(pascalCase)ResourceModel = UseResourceModel<{{NAME}}(pascalCase)Model>;
