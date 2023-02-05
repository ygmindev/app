import { MENU_FIXTURE_OPTIONS } from '@lib/frontend/core/components/Menu/Menu.fixtures';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { SelectField } from '@lib/frontend/form/components/SelectField/SelectField';
import type { SelectFieldPropsModel } from '@lib/frontend/form/components/SelectField/SelectField.models';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<SelectFieldPropsModel> = {
  Component: SelectField,
  category: 'form',
  defaultProps: { options: MENU_FIXTURE_OPTIONS },
  variants: [
    { props: { icon: 'person' } },
    { props: { isAutoFocus: true } },
    { props: { label: 'label' } },
    ...Object.values(ELEMENT_STATE).map((elementState) => ({ props: { elementState } })),
  ],
};
