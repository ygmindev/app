import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';
import { UnderwriterDealsPage } from '#lib-frontend/underwriter/pages/UnderwriterDealsPage/UnderwriterDealsPage';
import { type UnderwriterDealsPagePropsModel } from '#lib-frontend/underwriter/pages/UnderwriterDealsPage/UnderwriterDealsPage.models';

const { Component, displayName, testID } = withTestComponent<UnderwriterDealsPagePropsModel>({
  target: UnderwriterDealsPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
