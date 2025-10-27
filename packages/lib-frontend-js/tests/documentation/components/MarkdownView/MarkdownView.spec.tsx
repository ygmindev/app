import { type MarkdownViewPropsModel } from '@lib/frontend/documentation/components/MarkdownView/MarkdownView.models';
import { MarkdownView } from '@lib/frontend/documentation/components/MarkdownView/MarkdownView';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<MarkdownViewPropsModel>({
  target: MarkdownView,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
