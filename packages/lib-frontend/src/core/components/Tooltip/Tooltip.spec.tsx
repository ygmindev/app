import { Tooltip } from '@lib/frontend/core/components/Tooltip/Tooltip';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const TOOLTIP = 'TOOLTIP';

const { Component, displayName, testID } = withTestComponent({
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
