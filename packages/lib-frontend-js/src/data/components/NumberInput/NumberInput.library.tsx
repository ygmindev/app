import { NumberInput } from '@lib/frontend/data/components/NumberInput/NumberInput';
import { type NumberInputPropsModel } from '@lib/frontend/data/components/NumberInput/NumberInput.models';
import { TEXT_INPUT_KEYBOARD } from '@lib/frontend/data/components/TextInput/TextInput.constants';
import { LIBRARY_CATEGORY_FORM } from '@lib/frontend/library/components/Library/Library.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<NumberInputPropsModel> = {
  Component: NumberInput,
  category: LIBRARY_CATEGORY_FORM,
  defaultProps: {},
  variants: [
    { props: { addIcon: 'happy', removeIcon: 'sad' } },
    { props: { increment: 10 } },
    { props: { isTypable: false } },
    { props: { max: 10, min: -10 } },
    { props: { keyboard: TEXT_INPUT_KEYBOARD.DECIMAL } },
  ],
};
