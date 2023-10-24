import { render } from '#lib-fron#lib-frontend/underwriter/pages/UnderwriterPage/UnderwriterPage
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';
import { UnderwriterPage } from '#lib-frontend/underwriter/pages/UnderwriterPage/UnderwriterPage';
import { type UnderwriterPagePropsModel } from '#lib-frontend/underwriter/pages/UnderwriterPage/UnderwriterPage.models';

const { Component, displayName, testID } = withTestComponent<UnderwriterPagePropsModel>({
  target: UnderwriterPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
