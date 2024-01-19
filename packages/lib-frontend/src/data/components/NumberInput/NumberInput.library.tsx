import { NumberInput } from '@lib/frontend/data/components/NumberInput/NumberInput';
import { type NumberInputPropsModel } from '@lib/frontend/data/components/NumberInput/NumberInput.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<NumberInputPropsModel> = {
  Component: NumberInput,
  defaultProps: {},
  variants: [],
};
