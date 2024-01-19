import { PressableItem } from '@lib/frontend/core/components/PressableItem/PressableItem';
import { type PressableItemPropsModel } from '@lib/frontend/core/components/PressableItem/PressableItem.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<PressableItemPropsModel>({
  target: PressableItem,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
