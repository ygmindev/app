import { type TextEditorPropsModel } from '@lib/frontend/core/components/TextEditor/TextEditor.models';
import { TextEditor } from '@lib/frontend/core/components/TextEditor/TextEditor';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<TextEditorPropsModel>({
  target: TextEditor,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
