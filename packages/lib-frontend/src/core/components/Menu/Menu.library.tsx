import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import { MENU_FIXTURE_OPTIONS } from '@lib/frontend/core/components/Menu/Menu.fixtures';
import { type MenuPropsModel } from '@lib/frontend/core/components/Menu/Menu.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<MenuPropsModel> = {
  Component: Menu,
  defaultProps: {
    anchor: () => <WrapperFixture />,
    options: MENU_FIXTURE_OPTIONS,
  },
};
