import { type UseResourceModel } from '@lib/frontend/resource/hooks/useResource/useResource.models';
import { type {{NAME}}(pascalCase)Model } from '@lib/model/{{MODULE}}(camelCase)/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import { type {{NAME_ROOT}}(pascalCase)Model } from '@lib/model/{{MODULE_ROOT}}(camelCase)/{{NAME_ROOT}}(pascalCase)/{{NAME_ROOT}}(pascalCase).models';

export type Use{{NAME}}(pascalCase)ResourceModel = UseResourceModel<{{NAME}}(pascalCase)Model, {{NAME_ROOT}}(pascalCase)Model>;
