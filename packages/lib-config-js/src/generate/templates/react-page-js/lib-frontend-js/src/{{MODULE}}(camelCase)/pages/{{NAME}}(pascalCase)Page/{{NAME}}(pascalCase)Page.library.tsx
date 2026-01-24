import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { {{NAME}}(pascalCase)Page } from '@lib/frontend/{{MODULE}}(camelCase)/pages/{{NAME}}(pascalCase)Page/{{NAME}}(pascalCase)Page';
import { type {{NAME}}(pascalCase)PagePropsModel } from '@lib/frontend/{{MODULE}}(camelCase)/pages/{{NAME}}(pascalCase)Page/{{NAME}}(pascalCase)Page.models';

export const props: LibraryPropsModel<{{NAME}}(pascalCase)PropsModel> = {
  defaultProps: {},
  Component: {{NAME}}(pascalCase)Page,
  variants: [],
};
