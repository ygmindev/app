import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { TextField } from '@lib/frontend/form/components/TextField/TextField';
import type { TextFieldPropsModel } from '@lib/frontend/form/components/TextField/TextField.models';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<TextFieldPropsModel> = {
  Component: TextField,
  category: 'form',
  defaultProps: {},
  variants: [
    { props: { isAutoFocus: true } },
    { props: { label: 'label' } },
    { props: { isNoClear: true } },
    { props: { value: 'value' } },
    { props: { leftElement: () => <Icon icon="person" /> } },
    { props: { rightElement: () => <Icon icon="person" /> } },
    { props: { error: true } },
    { props: { error: 'error' } },
    ...Object.values(ELEMENT_STATE).map((elementState) => ({ props: { elementState } })),
  ],
};
