import { GroupForm } from '@lib/frontend/group/containers/GroupForm/GroupForm';
import { type GroupFormPropsModel } from '@lib/frontend/group/containers/GroupForm/GroupForm.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<GroupFormPropsModel>({ target: GroupForm });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
