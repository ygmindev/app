import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { SwitchField } from '#lib-frontend/form/components/SwitchField/SwitchField';
import { type SwitchFieldPropsModel } from '#lib-frontend/form/components/SwitchField/SwitchField.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<SwitchFieldPropsModel> = {
  Component: SwitchField,
  category: 'form',
  defaultProps: {},
  variants: [
    { props: { value: true } },
    { props: { iconActive: 'happy', iconInactive: 'sad' } },
    ...Object.values(ELEMENT_STATE).map((elementState) => ({ props: { elementState } })),
  ],
};
