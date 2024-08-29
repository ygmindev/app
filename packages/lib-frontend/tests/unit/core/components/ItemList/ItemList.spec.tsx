import { ItemList } from '@lib/frontend/core/components/ItemList/ItemList';
import { type ItemListPropsModel } from '@lib/frontend/core/components/ItemList/ItemList.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ItemListPropsModel>({
  target: ItemList,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
