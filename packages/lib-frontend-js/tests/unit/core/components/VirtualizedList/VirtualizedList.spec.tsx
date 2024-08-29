import { type MenuOptionModel } from '@lib/frontend/core/components/Menu/Menu.models';
import { VirtualizedList } from '@lib/frontend/core/components/VirtualizedList/VirtualizedList';
import { type VirtualizedListPropsModel } from '@lib/frontend/core/components/VirtualizedList/VirtualizedList.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<
  VirtualizedListPropsModel<MenuOptionModel>
>({
  target: VirtualizedList,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
