import { FloatingDot } from '@lib/frontend/core/components/FloatingDot/FloatingDot';
import { type FloatingDotPropsModel } from '@lib/frontend/core/components/FloatingDot/FloatingDot.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<FloatingDotPropsModel>({ target: FloatingDot });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
