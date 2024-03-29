import { NumberRangeInput } from '@lib/frontend/data/components/NumberRangeInput/NumberRangeInput';
import { type NumberRangeInputPropsModel } from '@lib/frontend/data/components/NumberRangeInput/NumberRangeInput.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<NumberRangeInputPropsModel> = {
  Component: NumberRangeInput,
  defaultProps: {},
  variants: [],
};
