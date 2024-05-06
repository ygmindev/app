import { Tooltip } from '@lib/frontend/core/components/Tooltip/Tooltip';
import { type TooltipPropsModel } from '@lib/frontend/core/components/Tooltip/Tooltip.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<TooltipPropsModel>({
  target: Tooltip,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
