import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { type AppearablePropsModel } from '@lib/frontend/animation/components/Appearable/Appearable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<AppearablePropsModel>({
  target: Appearable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
