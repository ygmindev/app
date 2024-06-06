import { type SwipeablePropsModel } from '@lib/frontend/core/components/Swipeable/Swipeable.models';
import { Swipeable } from '@lib/frontend/core/components/Swipeable/Swipeable';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SwipeablePropsModel>({
  target: Swipeable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
