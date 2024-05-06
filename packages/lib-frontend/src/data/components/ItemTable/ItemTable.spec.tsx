import { ItemTable } from '@lib/frontend/data/components/ItemTable/ItemTable';
import { type ItemTablePropsModel } from '@lib/frontend/data/components/ItemTable/ItemTable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ItemTablePropsModel>({
  target: ItemTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
