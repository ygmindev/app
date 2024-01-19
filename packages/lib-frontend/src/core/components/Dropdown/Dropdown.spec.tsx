import { Dropdown } from '@lib/frontend/core/components/Dropdown/Dropdown';
import { type DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { render } from '@lib/frontend/test/utils/render/render';
import { waitForExpect } from '@lib/frontend/test/utils/waitForExpect/waitForExpect';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const ANCHOR = 'ANCHOR';
const CHILDREN = 'CHILDREN';

const { Component, displayName } = withTestComponent<DropdownPropsModel>({
  defaultProps: {
    anchor: <WrapperFixture>{ANCHOR}</WrapperFixture>,
    children: <WrapperFixture>{CHILDREN}</WrapperFixture>,
    isOpen: false,
  },
  target: Dropdown,
});

describe(displayName, () => {
  test('works with close', async () => {
    const { findByText } = await render({ element: <Component /> });
    expect(await findByText(ANCHOR)).toBeTruthy();
    await waitForExpect(async () => expect(await findByText(CHILDREN)).toBeFalsy());
  });

  test('works with open', async () => {
    const { findByText } = await render({ element: <Component isOpen /> });
    expect(await findByText(ANCHOR)).toBeTruthy();
    await waitForExpect(async () => expect(await findByText(CHILDREN)).toBeTruthy());
  });
});
