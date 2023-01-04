import type {
  _{{NAME}}(pascalCase)Model,
  _{{NAME}}(pascalCase)ParamsModel,
} from '{{PATH}}/{{NAME}}(camelCase)/_{{NAME}}(camelCase).models';

export interface {{NAME}}(pascalCase)ParamsModel extends _{{NAME}}(pascalCase)ParamsModel {}

export type {{NAME}}(pascalCase)Model = _{{NAME}}(pascalCase)Model;
