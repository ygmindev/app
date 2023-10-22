import { IssuerAnalyticsPage } from '#lib-frontend/issuer/pages/IssuerAnalyticsPage/IssuerAnalyticsPage';
import { type IssuerAnalyticsPagePropsModel } from '#lib-frontend/issuer/pages/IssuerAnalyticsPage/IssuerAnalyticsPage.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<IssuerAnalyticsPagePropsModel>({
  target: IssuerAnalyticsPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
