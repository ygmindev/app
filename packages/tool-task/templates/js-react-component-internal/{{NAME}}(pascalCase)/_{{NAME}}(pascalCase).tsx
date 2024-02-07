import { type _{{NAME}}PropsModel } from '@{{PATH}}(pathCase)/{{NAME}}/_{{NAME}}.models';
import { type {{NAME}}Props } from '{{NAME}}';
import { {{NAME}} } from '{{NAME}}';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';

export const _{{NAME}}(pascalCase) = composeComponent<_{{NAME}}(pascalCase)PropsModel, {{NAME}}Props>({
  Component: {{NAME}},

  getProps: ({ children }) => ({
    children,
  }),
});
