import { KfnMembersPage } from '@lib/frontend/kfn/pages/KfnMembersPage/KfnMembersPage';
import { type KfnMembersPagePropsModel } from '@lib/frontend/kfn/pages/KfnMembersPage/KfnMembersPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<KfnMembersPagePropsModel>({
  target: KfnMembersPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
