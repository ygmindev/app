import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { TextField } from '#lib-frontend/data/components/TextField/TextField';
import { type TextFieldPropsModel } from '#lib-frontend/data/components/TextField/TextField.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<TextFieldPropsModel> = {
  Component: TextField,
  category: 'form',
  defaultProps: {},
  minWidth: 200,
  variants: [
    { props: { isAutoFocus: true } },
    { props: { label: 'label' } },
    { props: { isNoClear: true } },
    { props: { value: 'value' } },
    { props: { leftElement: <Icon icon="personCircle" /> } },
    { props: { rightElement: <Icon icon="personCircle" /> } },
    { props: { label: 'label', leftElement: <Icon icon="personCircle" /> } },
    { props: { label: 'label', rightElement: <Icon icon="personCircle" /> } },
    { props: { error: true } },
    { props: { error: 'error' } },
    { props: { mask: 'XXX-XXX' } },
    ...Object.values(ELEMENT_STATE).map((elementState) => ({ props: { elementState } })),
  ],
};
