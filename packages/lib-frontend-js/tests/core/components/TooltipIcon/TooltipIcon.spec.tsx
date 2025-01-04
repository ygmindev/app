import { TooltipIcon } from '@lib/frontend/js/core/components/TooltipIcon/TooltipIcon';
import { type TooltipIconPropsModel } from '@lib/frontend/js/core/components/TooltipIcon/TooltipIcon.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<TooltipIconPropsModel>({ target: TooltipIcon });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
