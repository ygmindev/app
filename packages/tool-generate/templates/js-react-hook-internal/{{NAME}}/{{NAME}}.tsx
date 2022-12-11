import type {
  {{NAME}}(pascalCase)Model,
  {{NAME}}(pascalCase)ParamsModel,
} from '{{PATH}}/{{NAME}}/{{NAME}}.models';
import { _{{NAME}} } from '{{PATH}}/{{NAME}}/_{{NAME}}';

export const {{NAME}} = (
  { ...props }: {{NAME}}(pascalCase)ParamsModel,
): {{NAME}}(pascalCase)Model => _{{NAME}}({ ...props });
