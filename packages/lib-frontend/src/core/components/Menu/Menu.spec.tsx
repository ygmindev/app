import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import type { MenuOptionModel } from '@lib/frontend/core/components/Menu/Menu.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const ANCHOR = 'ANCHOR';
const OPTIONS: Array<MenuOptionModel> = [];

const { Component, displayName } = withTestComponent({
  defaultProps: {
    anchor: <WrapperFixture text={ANCHOR} />,
    options: OPTIONS,
  },
  target: Menu,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByText } = render(<Component />);
    expect(queryByText(ANCHOR)).toBeTruthy();
  });
});
