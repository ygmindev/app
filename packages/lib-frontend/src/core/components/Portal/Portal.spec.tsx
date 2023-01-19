import { Portal } from '@lib/frontend/core/components/Portal/Portal';
import type { PortalPropsModel } from '@lib/frontend/core/components/Portal/Portal.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { render } from '@lib/frontend/test/utils/render/render';
import { waitForExpect } from '@lib/frontend/test/utils/waitForExpect/waitForExpect';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const CHILDREN = 'CHILDREN';

const { Component, displayName } = withTestComponent<PortalPropsModel>({
  defaultProps: {
    children: <WrapperFixture text={CHILDREN} />,
  },
  target: Portal,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByText } = render(<Component />);
    await waitForExpect({ callback: () => expect(queryByText(CHILDREN)).toBeTruthy() });
  });
});
