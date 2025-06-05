import { MENU_FIXTURE_OPTIONS } from '@lib/frontend/core/components/Menu/Menu.fixtures';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { MenuInput } from '@lib/frontend/data/components/MenuInput/MenuInput';
import { type MenuInputPropsModel } from '@lib/frontend/data/components/MenuInput/MenuInput.models';
import { LIBRARY_CATEGORY_FORM } from '@lib/frontend/library/components/Library/Library.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { cartesianObject } from '@lib/shared/core/utils/cartesianObject/cartesianObject';

export const props: LibraryPropsModel<MenuInputPropsModel> = {
  Component: MenuInput,
  category: LIBRARY_CATEGORY_FORM,
  defaultProps: { options: MENU_FIXTURE_OPTIONS },
  minWidth: 200,
  variants: [
    { props: { icon: 'personCircle' } },
    { props: { label: 'label' } },
    ...cartesianObject({ elementState: Object.values(ELEMENT_STATE) }).map((props) => ({ props })),
  ],
};
