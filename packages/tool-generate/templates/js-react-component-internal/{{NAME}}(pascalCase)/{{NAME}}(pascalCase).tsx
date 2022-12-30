import { _{{NAME}} } from '{{PATH}}/{{NAME}}/_{{NAME}}';
import type { _{{NAME}}PropsModel } from '{{PATH}}/{{NAME}}/_{{NAME}}.models';
import type { {{NAME}}PropsModel } from '{{PATH}}/{{NAME}}/{{NAME}}.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';

export const {{NAME}}(pascalCase) = composeComponent<{{NAME}}(pascalCase)PropsModel, _{{NAME}}(pascalCase)PropsModel>({
  getComponent: () => _{{NAME}}(pascalCase),

  getProps: ({ children }) => ({
    children,
  }),
});
