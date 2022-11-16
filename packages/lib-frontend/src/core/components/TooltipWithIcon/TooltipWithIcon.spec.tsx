import { TooltipWithIcon } from '@lib/frontend/core/components/TooltipWithIcon/TooltipWithIcon';
import type { TooltipWithIconPropsModel } from '@lib/frontend/core/components/TooltipWithIcon/TooltipWithIcon.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<TooltipWithIconPropsModel>({
  target: TooltipWithIcon,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
