import { GroupFormPage } from '@lib/frontend/group/pages/GroupFormPage/GroupFormPage';
import { type GroupFormPagePropsModel } from '@lib/frontend/group/pages/GroupFormPage/GroupFormPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<GroupFormPagePropsModel>({
  target: GroupFormPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
