import { AppHomePage } from '@lib/frontend/app/pages/AppHomePage/AppHomePage';
import { type AppHomePagePropsModel } from '@lib/frontend/app/pages/AppHomePage/AppHomePage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<AppHomePagePropsModel>({
  target: AppHomePage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
