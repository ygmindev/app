import { MarkdownDocumentation } from '@lib/frontend/documentation/components/MarkdownDocumentation/MarkdownDocumentation';
import { type MarkdownDocumentationPropsModel } from '@lib/frontend/documentation/components/MarkdownDocumentation/MarkdownDocumentation.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<MarkdownDocumentationPropsModel>({ target: MarkdownDocumentation });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
