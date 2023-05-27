import { LineItem } from '@lib/frontend/core/components/LineItem/LineItem';
import type { LineItemPropsModel } from '@lib/frontend/core/components/LineItem/LineItem.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<LineItemPropsModel>({
  target: LineItem,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
