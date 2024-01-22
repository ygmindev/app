import { MENU_FIXTURE_OPTIONS } from '@lib/frontend/core/components/Menu/Menu.fixtures';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { MenuInput } from '@lib/frontend/data/components/MenuInput/MenuInput';
import { type MenuInputPropsModel } from '@lib/frontend/data/components/MenuInput/MenuInput.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<MenuInputPropsModel> = {
  Component: MenuInput,
  category: 'form',
  defaultProps: { options: MENU_FIXTURE_OPTIONS },
  minWidth: 200,
  variants: [
    { props: { icon: 'personCircle' } },
    { props: { label: 'label' } },
    ...Object.values(ELEMENT_STATE).map((elementState) => ({ props: { elementState } })),
  ],
};
