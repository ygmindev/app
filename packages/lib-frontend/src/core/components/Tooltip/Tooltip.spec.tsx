import { Tooltip } from '@lib/frontend/core/components/Tooltip/Tooltip';
import type { TooltipPropsModel } from '@lib/frontend/core/components/Tooltip/Tooltip.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const TOOLTIP = 'TOOLTIP';

const { Component, displayName, testID } = withTestComponent<TooltipPropsModel>({
  defaultProps: {
    tooltip: <WrapperFixture text={TOOLTIP} />,
  },
  target: Tooltip,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
