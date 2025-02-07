import { type _TextEditorPropsModel } from '@lib/frontend/core/components/TextEditor/_TextEditor.models';
import { type TextEditorProps } from 'TextEditor';
import { TextEditor } from 'TextEditor';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';

export const _TextEditor = composeComponent<_TextEditorPropsModel, TextEditorProps>({
  Component: TextEditor,

  getProps: ({ children }) => ({
    children,
  }),
});
