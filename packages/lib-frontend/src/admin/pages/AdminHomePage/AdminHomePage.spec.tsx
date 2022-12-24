import { AdminHomePage } from '@lib/frontend/admin/pages/AdminHomePage/AdminHomePage';
import type { AdminHomePagePropsModel } from '@lib/frontend/admin/pages/AdminHomePage/AdminHomePage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<AdminHomePagePropsModel>({
  target: AdminHomePage,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
