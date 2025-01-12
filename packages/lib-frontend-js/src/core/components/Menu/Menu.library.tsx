import { Button } from '@lib/frontend/core/components/Button/Button';
import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import { MENU_FIXTURE_OPTIONS } from '@lib/frontend/core/components/Menu/Menu.fixtures';
import { type MenuPropsModel } from '@lib/frontend/core/components/Menu/Menu.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<MenuPropsModel> = {
  Component: Menu,
  Renderer: ({ element }) => <Wrapper isCenter>{element}</Wrapper>,
  defaultProps: {
    anchor: (isActive) => <Button>{`${isActive}`}</Button>,
    options: MENU_FIXTURE_OPTIONS,
  },
};
