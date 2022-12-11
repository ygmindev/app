import { Activate } from '@lib/frontend/core/components/Activate/Activate';
import type { ActivatePropsModel } from '@lib/frontend/core/components/Activate/Activate.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { hoverIn } from '@lib/frontend/testing/utils/hoverIn/hoverIn';
import { hoverOut } from '@lib/frontend/testing/utils/hoverOut/hoverOut';
import { render } from '@lib/frontend/testing/utils/render/render';
import { waitForExpect } from '@lib/frontend/testing/utils/waitForExpect/waitForExpect';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const ACTIVATE = 'ACTIVATE';
const ACTIVE = 'ACTIVE';
const INACTIVE = 'INACTIVE';

const { Component, displayName } = withTestComponent<ActivatePropsModel>({
  defaultProps: {
    children: (isActive) => (
      <WrapperFixture testID={ACTIVATE} text={isActive ? ACTIVE : INACTIVE} />
    ),
  },
  target: Activate,
});

describe(displayName, () => {
  test('activate', async () => {
    const { queryByTestId, queryByText } = render(<Component />);
    hoverIn(queryByTestId(ACTIVATE));
    await waitForExpect(() => expect(queryByText(ACTIVE)).toBeTruthy());
  });

  test('activate controlled', async () => {
    const handleActive = jest.fn();
    const handleInactive = jest.fn();
    const { queryByTestId, queryByText } = render(
      <Component onActive={handleActive} onInactive={handleInactive} />,
    );
    hoverIn(queryByTestId(ACTIVATE));
    await waitForExpect(() => expect(queryByText(ACTIVE)).toBeTruthy());
    hoverOut(queryByTestId(ACTIVATE));
    await waitForExpect(() => expect(handleInactive).toHaveBeenCalled());
  });
});
