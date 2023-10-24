import { UnderwriterAnalyticsPage } from '#lib-frontend/underwriter/pages/UnderwriterAnalyticsPage/UnderwriterAnalyticsPage';
import { type UnderwriterAnalyticsPagePropsModel } from '#lib-frontend/underwriter/pages/UnderwriterAnalyticsPage/UnderwriterAnalyticsPage.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<UnderwriterAnalyticsPagePropsModel>({
  target: UnderwriterAnalyticsPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
