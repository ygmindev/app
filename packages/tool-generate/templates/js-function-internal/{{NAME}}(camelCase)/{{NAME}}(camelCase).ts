import { _{{NAME}}(camelCase) } from '{{PATH}}/{{NAME}}(camelCase)/_{{NAME}}(camelCase)';
import type {
  {{NAME}}(pascalCase)Model,
  {{NAME}}(pascalCase)ParamsModel,
} from '{{PATH}}/{{NAME}}(camelCase)/{{NAME}}(camelCase).models';

export const {{NAME}}(camelCase) = ({ ...params }: {{NAME}}(pascalCase)ParamsModel): {{NAME}}(pascalCase)Model => _{{NAME}}(camelCase)({ ...params });
