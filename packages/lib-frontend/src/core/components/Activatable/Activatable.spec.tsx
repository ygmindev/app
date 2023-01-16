import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import type { ActivatablePropsModel } from '@lib/frontend/core/components/Activatable/Activatable.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { hoverIn } from '@lib/frontend/test/utils/hoverIn/hoverIn';
import { hoverOut } from '@lib/frontend/test/utils/hoverOut/hoverOut';
import { render } from '@lib/frontend/test/utils/render/render';
import { waitForExpect } from '@lib/frontend/test/utils/waitForExpect/waitForExpect';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const ACTIVATE = 'ACTIVATE';
const ACTIVE = 'ACTIVE';
const INACTIVE = 'INACTIVE';

const { Component, displayName } = withTestComponent<ActivatablePropsModel>({
  defaultProps: {
    children: (isActive) => (
      <WrapperFixture
        testID={ACTIVATE}
        text={isActive ? ACTIVE : INACTIVE}
      />
    ),
  },
  target: Activatable,
});

describe(displayName, () => {
  test('activate', async () => {
    const { queryByTestId, queryByText } = render(<Component />);
    hoverIn(queryByTestId(ACTIVATE));
    await waitForExpect(() => expect(queryByText(ACTIVE)).toBeTruthy());
  });

  test('activate controlled', async () => {
    const handleActive = vi.fn();
    const handleInactive = vi.fn();
    const { queryByTestId, queryByText } = render(
      <Component
        onActive={handleActive}
        onInactive={handleInactive}
      />,
    );
    hoverIn(queryByTestId(ACTIVATE));
    await waitForExpect(() => expect(queryByText(ACTIVE)).toBeTruthy());
    hoverOut(queryByTestId(ACTIVATE));
    await waitForExpect(() => expect(handleInactive).toHaveBeenCalled());
  });
});
