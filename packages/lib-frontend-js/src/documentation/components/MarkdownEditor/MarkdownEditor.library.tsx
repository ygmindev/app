import { MarkdownEditor } from '@lib/frontend/documentation/components/MarkdownEditor/MarkdownEditor';
import { type MarkdownEditorPropsModel } from '@lib/frontend/documentation/components/MarkdownEditor/MarkdownEditor.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<MarkdownEditorPropsModel> = {
  Component: MarkdownEditor,
  defaultProps: {},
  variants: [],
};
