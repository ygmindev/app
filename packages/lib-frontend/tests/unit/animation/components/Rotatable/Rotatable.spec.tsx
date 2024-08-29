import { Rotatable } from '@lib/frontend/animation/components/Rotatable/Rotatable';
import { type RotatablePropsModel } from '@lib/frontend/animation/components/Rotatable/Rotatable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<RotatablePropsModel>({
  target: Rotatable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
