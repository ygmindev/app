import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import { type MenuPropsModel } from '@lib/frontend/core/components/Menu/Menu.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { type OptionModel } from '@lib/frontend/core/core.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const ANCHOR = 'ANCHOR';
const OPTIONS: Array<OptionModel> = [];

const { Component, displayName } = withTestComponent<MenuPropsModel>({
  defaultProps: {
    anchor: () => <WrapperFixture>{ANCHOR}</WrapperFixture>,
    options: OPTIONS,
  },
  target: Menu,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByText } = await render({ element: <Component /> });
    expect(await findByText(ANCHOR)).toBeTruthy();
  });
});
