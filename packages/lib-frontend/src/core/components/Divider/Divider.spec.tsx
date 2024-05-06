import { Divider } from '@lib/frontend/core/components/Divider/Divider';
import { type DividerPropsModel } from '@lib/frontend/core/components/Divider/Divider.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<DividerPropsModel>({
  target: Divider,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
