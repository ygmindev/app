import { SnapshotPage } from '@lib/frontend/test/pages/SnapshotPage/SnapshotPage';
import { type SnapshotPagePropsModel } from '@lib/frontend/test/pages/SnapshotPage/SnapshotPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SnapshotPagePropsModel>({
  target: SnapshotPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
