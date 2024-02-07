import { _{{NAME}} } from '@{{PATH}}(pathCase)/{{NAME}}/_{{NAME}}';
import { type _{{NAME}}PropsModel } from '@{{PATH}}(pathCase)/{{NAME}}/_{{NAME}}.models';
import { type {{NAME}}PropsModel } from '@{{PATH}}(pathCase)/{{NAME}}/{{NAME}}.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const {{NAME}}(pascalCase) = composeComponent<{{NAME}}(pascalCase)PropsModel, _{{NAME}}(pascalCase)PropsModel>({
  Component: _{{NAME}}(pascalCase),

  getProps: ({ children }) => ({
    children,
  }),
});

process.env.APP_IS_DEBUG && ({{NAME}}(pascalCase).displayName = variableName({ {{NAME}}(pascalCase) }));
