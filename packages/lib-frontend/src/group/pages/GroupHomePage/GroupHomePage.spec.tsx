import { GroupHomePage } from '#lib-frontend/group/pages/GroupHomePage/GroupHomePage';
import { type GroupHomePagePropsModel } from '#lib-frontend/group/pages/GroupHomePage/GroupHomePage.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<GroupHomePagePropsModel>({
  target: GroupHomePage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
