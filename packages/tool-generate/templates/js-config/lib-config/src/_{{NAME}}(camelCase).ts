import {
  type _{{NAME}}(pascalCase)ConfigModel,
  type {{NAME}}(pascalCase)ConfigModel,
} from '#lib-config/{{MODULE}}(camelCase)/{{NAME}}(camelCase)/{{NAME}}(camelCase).models';
import { type ReturnTypeModel } from '#lib-shared/core/core.models';

export const _{{NAME}}(camelCase) = ({
}: ReturnTypeModel<{{NAME}}(pascalCase)ConfigModel>): ReturnTypeModel<_{{NAME}}(pascalCase)ConfigModel> => ({

});
