import { Dropdown } from '@lib/frontend/core/components/Dropdown/Dropdown';
import type { DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { render } from '@lib/frontend/testing/utils/render/render';
import { waitForExpect } from '@lib/frontend/testing/utils/waitForExpect/waitForExpect';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const ANCHOR = 'ANCHOR';
const CHILDREN = 'CHILDREN';

const { Component, displayName } = withTestComponent<DropdownPropsModel>({
  defaultProps: {
    anchor: <WrapperFixture text={ANCHOR} />,
    children: <WrapperFixture text={CHILDREN} />,
    isOpen: false,
  },
  target: Dropdown,
});

describe(displayName, () => {
  test('works with close', async () => {
    const { queryByText } = render(<Component />);
    expect(queryByText(ANCHOR)).toBeTruthy();
    await waitForExpect(() => expect(queryByText(CHILDREN)).toBeFalsy());
  });

  test('works with open', async () => {
    const { queryByText } = render(<Component isOpen />);
    expect(queryByText(ANCHOR)).toBeTruthy();
    await waitForExpect(() => expect(queryByText(CHILDREN)).toBeTruthy());
  });
});
