import { type UseResourceMethodHookParamsModel } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type {{NAME}}(pascalCase)ServiceModel } from '#lib-shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)Service/{{NAME}}(pascalCase)Service.models';

export type Use{{NAME}}(pascalCase)ResourceParamsModel = UseResourceMethodHookParamsModel;

export type Use{{NAME}}(pascalCase)ResourceModel
  = Pick<{{NAME}}(pascalCase)ServiceModel, 'get'>;
