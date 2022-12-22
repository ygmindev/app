import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import { MENU_FIXTURE_OPTIONS } from '@lib/frontend/core/components/Menu/Menu.fixtures';
import type { MenuPropsModel } from '@lib/frontend/core/components/Menu/Menu.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';

const { Story, meta } = withStory<MenuPropsModel>({
  defaultProps: {
    anchor: <WrapperFixture />,
    options: MENU_FIXTURE_OPTIONS,
  },
  target: Menu,
});

export { Story, meta as default };
