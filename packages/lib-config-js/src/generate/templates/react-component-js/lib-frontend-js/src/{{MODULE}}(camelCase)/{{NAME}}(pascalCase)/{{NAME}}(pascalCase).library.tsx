import { {{NAME}}(pascalCase) } from '@lib/frontend/{{MODULE}}(camelCase)/components/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)';
import { type {{NAME}}(pascalCase)PropsModel } from '@lib/frontend/{{MODULE}}(camelCase)/components/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<{{NAME}}(pascalCase)PropsModel> = {
  Component: {{NAME}}(pascalCase),
  defaultProps: {},
  variants: [],
};
