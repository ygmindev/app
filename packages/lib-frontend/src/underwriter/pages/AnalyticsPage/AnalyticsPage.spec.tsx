import { AnalyticsPage } from '#lib-frontend/underwriter/pages/AnalyticsPage/AnalyticsPage';
import { type AnalyticsPagePropsModel } from '#lib-frontend/underwriter/pages/AnalyticsPage/AnalyticsPage.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<AnalyticsPagePropsModel>({
  target: AnalyticsPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
