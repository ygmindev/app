import { MENU_FIXTURE_OPTIONS } from '@lib/frontend/core/components/Menu/Menu.fixtures';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { DropdownInput } from '@lib/frontend/data/components/DropdownInput/DropdownInput';
import { type DropdownInputPropsModel } from '@lib/frontend/data/components/DropdownInput/DropdownInput.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<DropdownInputPropsModel> = {
  Component: DropdownInput,
  category: 'form',
  defaultProps: { options: MENU_FIXTURE_OPTIONS },
  minWidth: 200,
  variants: [
    { props: { icon: 'personCircle' } },
    { props: { isAutoFocus: true } },
    { props: { label: 'label' } },
    ...Object.values(ELEMENT_STATE).map((elementState) => ({ props: { elementState } })),
  ],
};
