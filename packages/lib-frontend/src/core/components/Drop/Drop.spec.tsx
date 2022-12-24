import { Drop } from '@lib/frontend/core/components/Drop/Drop';
import type { DropPropsModel } from '@lib/frontend/core/components/Drop/Drop.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const ACTIVE = 'ACTIVE';
const INACTIVE = 'INACTIVE';

const { Component, displayName, testID } = withTestComponent<DropPropsModel>({
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
