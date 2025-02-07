import { _TextEditor } from '@lib/frontend/core/components/TextEditor/_TextEditor';
import { type _TextEditorPropsModel } from '@lib/frontend/core/components/TextEditor/_TextEditor.models';
import { type TextEditorPropsModel } from '@lib/frontend/core/components/TextEditor/TextEditor.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const TextEditor = composeComponent<TextEditorPropsModel, _TextEditorPropsModel>({
  Component: _TextEditor,

  getProps: ({ children }) => ({
    children,
  }),
});

process.env.APP_IS_DEBUG && (TextEditor.displayName = variableName({ TextEditor }));
