import { AdminHome } from '@lib/frontend/admin/containers/AdminHome/AdminHome';
import type { AdminHomePropsModel } from '@lib/frontend/admin/containers/AdminHome/AdminHome.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<AdminHomePropsModel>({
  target: AdminHome,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
