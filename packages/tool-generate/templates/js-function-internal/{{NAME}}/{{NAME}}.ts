import { _{{NAME}} } from '{{PATH}}/{{NAME}}/_{{NAME}}';
import type { {{NAME}}(pascalCase)ParamsModel } from '{{PATH}}/{{NAME}}/{{NAME}}.models';

export const {{NAME}} = async ({ ...params }: {{NAME}}(pascalCase)ParamsModel): Promise<void> => {
  return _{{NAME}}({ ...params });
};
