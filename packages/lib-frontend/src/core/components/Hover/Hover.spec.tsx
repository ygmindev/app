import { Hover } from '@lib/frontend/core/components/Hover/Hover';
import type { HoverPropsModel } from '@lib/frontend/core/components/Hover/Hover.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { hoverIn } from '@lib/frontend/test/utils/hoverIn/hoverIn';
import { render } from '@lib/frontend/test/utils/render/render';
import { waitForExpect } from '@lib/frontend/test/utils/waitForExpect/waitForExpect';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const HOVER = 'HOVER';
const ACTIVE = 'ACTIVE';
const INACTIVE = 'INACTIVE';

const { Component, displayName } = withTestComponent<HoverPropsModel>({
  defaultProps: {
    children: (isActive) => (
      <Wrapper testID={HOVER}>
        <WrapperFixture text={isActive ? ACTIVE : INACTIVE} />
      </Wrapper>
    ),
  },
  target: Hover,
});

describe(displayName, () => {
  test('activate', async () => {
    const { queryByTestId, queryByText } = render(<Component />);
    hoverIn(queryByTestId(HOVER));
    await waitForExpect(() => expect(queryByText(ACTIVE)).toBeTruthy());
  });
});
