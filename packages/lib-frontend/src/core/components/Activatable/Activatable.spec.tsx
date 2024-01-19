import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { type ActivatablePropsModel } from '@lib/frontend/core/components/Activatable/Activatable.models';
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
      <WrapperFixture testID={ACTIVATE}>{isActive ? ACTIVE : INACTIVE}</WrapperFixture>
    ),
  },
  target: Activatable,
});

describe(displayName, () => {
  test('activate', async () => {
    const { findByTestId, findByText } = await render({ element: <Component /> });
    hoverIn(await findByTestId(ACTIVATE));
    await waitForExpect(async () => expect(await findByText(ACTIVE)).toBeTruthy());
  });

  test('activate controlled', async () => {
    const handleActive = jest.fn();
    const handleInactive = jest.fn();
    const { findByTestId, findByText } = await render({
      element: (
        <Component
          onActive={handleActive}
          onInactive={handleInactive}
        />
      ),
    });
    hoverIn(await findByTestId(ACTIVATE));
    await waitForExpect(async () => expect(await findByText(ACTIVE)).toBeTruthy());
    hoverOut(await findByTestId(ACTIVATE));
    await waitForExpect(async () => expect(handleInactive).toHaveBeenCalled());
  });
});
