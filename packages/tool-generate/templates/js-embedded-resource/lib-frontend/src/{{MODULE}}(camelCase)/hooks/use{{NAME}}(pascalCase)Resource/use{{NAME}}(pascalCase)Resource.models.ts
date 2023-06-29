import { type UseResourceMethodHookParamsModel } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type {{NAME}}(pascalCase)ServiceModel } from '#lib-shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)Service/{{NAME}}(pascalCase)Service.models';
import {
type  {{NAME_ROOT}}(pascalCase)Model,
} from '#lib-shared/{{MODULE_ROOT}}(camelCase)/resources/{{NAME_ROOT}}(pascalCase)/{{NAME_ROOT}}(pascalCase).models';

export type Use{{NAME}}(pascalCase)ResourceParamsModel =
  UseResourceMethodHookParamsModel<{{NAME_ROOT}}(pascalCase)Model>;

export type Use{{NAME}}(pascalCase)ResourceModel
  = Pick<{{NAME}}(pascalCase)ServiceModel, 'get'>;
