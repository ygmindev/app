import { UtilityTable } from '@lib/frontend/admin/containers/UtilityTable/UtilityTable';
import { type UtilityTablePropsModel } from '@lib/frontend/admin/containers/UtilityTable/UtilityTable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<UtilityTablePropsModel>({
  target: UtilityTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
