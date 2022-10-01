import { Drop } from '@lib/frontend/core/components/Drop/Drop';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const ACTIVE = 'ACTIVE';
const INACTIVE = 'INACTIVE';

const { Component, displayName, testID } = withTestComponent({
  defaultProps: {
    render: (isActive) => <WrapperFixture text={isActive ? ACTIVE : INACTIVE} />,
  },
  target: Drop,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
