import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { type TextInputPropsModel } from '@lib/frontend/data/components/TextInput/TextInput.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<TextInputPropsModel> = {
  Component: TextInput,
  category: 'form',
  defaultProps: {},
  minWidth: 200,
  variants: [
    { props: { label: 'label' } },
    { props: { isNoClear: true } },
    { props: { value: 'value' } },
    { props: { leftElement: <Icon icon="personCircle" /> } },
    { props: { rightElement: <Icon icon="personCircle" /> } },
    { props: { label: 'label', leftElement: <Icon icon="personCircle" /> } },
    { props: { label: 'label', rightElement: <Icon icon="personCircle" /> } },
    { props: { error: true } },
    { props: { error: 'error' } },
    ...Object.values(ELEMENT_STATE).map((elementState) => ({ props: { elementState } })),
  ],
};
