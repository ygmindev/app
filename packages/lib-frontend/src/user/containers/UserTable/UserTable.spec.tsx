import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';
import { UserTable } from '@lib/frontend/user/containers/UserTable/UserTable';
import { type UserTablePropsModel } from '@lib/frontend/user/containers/UserTable/UserTable.models';

const { Component, displayName, testID } = withTestComponent<UserTablePropsModel>({
  target: UserTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
