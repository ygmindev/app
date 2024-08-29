import { AdminHomePage } from '@lib/frontend/admin/pages/AdminHomePage/AdminHomePage';
import { type AdminHomePagePropsModel } from '@lib/frontend/admin/pages/AdminHomePage/AdminHomePage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<AdminHomePagePropsModel>({
  target: AdminHomePage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
