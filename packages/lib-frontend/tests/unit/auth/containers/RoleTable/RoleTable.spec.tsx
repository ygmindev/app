import { RoleTable } from '@lib/frontend/auth/containers/RoleTable/RoleTable';
import { type RoleTablePropsModel } from '@lib/frontend/auth/containers/RoleTable/RoleTable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<RoleTablePropsModel>({
  target: RoleTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
