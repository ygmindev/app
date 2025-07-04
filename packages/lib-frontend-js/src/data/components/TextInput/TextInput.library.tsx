import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { type TextInputPropsModel } from '@lib/frontend/data/components/TextInput/TextInput.models';
import { LIBRARY_CATEGORY_FORM } from '@lib/frontend/library/components/Library/Library.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { cartesianObject } from '@lib/shared/core/utils/cartesianObject/cartesianObject';

export const props: LibraryPropsModel<TextInputPropsModel> = {
  Component: TextInput,
  category: LIBRARY_CATEGORY_FORM,
  defaultProps: {},
  minWidth: 200,
  variants: [
    { props: { label: 'label' } },
    { props: { isClearable: false } },
    { props: { value: 'value' } },
    { props: { leftElement: <Icon icon="personCircle" /> } },
    { props: { rightElement: <Icon icon="personCircle" /> } },
    { props: { label: 'label', leftElement: <Icon icon="personCircle" /> } },
    { props: { label: 'label', rightElement: <Icon icon="personCircle" /> } },
    { props: { error: true } },
    { props: { error: 'error' } },
    ...cartesianObject({ elementState: Object.values(ELEMENT_STATE) }).map((props) => ({ props })),
    { props: { mask: '[000]-[000]-[0000]' } },
    { props: { label: 'date', mask: '[00]{/}[00]{/}[0000]' } },
  ],
};
