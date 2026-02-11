import {
  type {{NAME}}(pascalCase)Model,
  type {{NAME}}(pascalCase)ParamsModel,
} from '@{{PATH}}(pathCase)/{{NAME}}/{{NAME}}.models';
import { _{{NAME}} } from '@{{PATH}}(pathCase)/{{NAME}}(camelCase)/_{{NAME}}(camelCase)';

export const {{NAME}}(camelCase) = (
  { ...props }: {{NAME}}(pascalCase)ParamsModel,
): {{NAME}}(pascalCase)Model => _{{NAME}}(camelCase)({ ...props });
