import { GroupTable } from '@lib/frontend/group/containers/GroupTable/GroupTable';
import { type GroupTablePropsModel } from '@lib/frontend/group/containers/GroupTable/GroupTable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<GroupTablePropsModel>({
  target: GroupTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
