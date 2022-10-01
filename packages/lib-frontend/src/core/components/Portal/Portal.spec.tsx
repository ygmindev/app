import { Portal } from '@lib/frontend/core/components/Portal/Portal';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { render } from '@lib/frontend/testing/utils/render/render';
import { waitForExpect } from '@lib/frontend/testing/utils/waitForExpect/waitForExpect';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const CHILDREN = 'CHILDREN';

const { Component, displayName } = withTestComponent({
  defaultProps: {
    children: <WrapperFixture text={CHILDREN} />,
  },
  target: Portal,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByText } = render(<Component />);
    await waitForExpect(() => expect(queryByText(CHILDREN)).toBeTruthy());
  });
});
