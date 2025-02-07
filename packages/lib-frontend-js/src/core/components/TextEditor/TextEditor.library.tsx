import { TextEditor } from '@lib/frontend/core/components/TextEditor/TextEditor';
import { type TextEditorPropsModel } from '@lib/frontend/core/components/TextEditor/TextEditor.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<TextEditorPropsModel> = {
  Component: TextEditor,
  defaultProps: {},
  variants: [],
};
