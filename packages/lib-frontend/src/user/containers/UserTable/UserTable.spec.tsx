import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';
import { UserTable } from '@lib/frontend/user/containers/UserTable/UserTable';
import type { UserTablePropsModel } from '@lib/frontend/user/containers/UserTable/UserTable.models';

const { Component, displayName, testID } = withTestComponent<UserTablePropsModel>({
  target: UserTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
