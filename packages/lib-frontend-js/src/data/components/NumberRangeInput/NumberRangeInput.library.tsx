import { NumberRangeInput } from '@lib/frontend/data/components/NumberRangeInput/NumberRangeInput';
import { type NumberRangeInputPropsModel } from '@lib/frontend/data/components/NumberRangeInput/NumberRangeInput.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { type AMOUNT_UNIT } from '@lib/shared/data/utils/numberFormat/numberFormat.constants';

export const props: LibraryPropsModel<NumberRangeInputPropsModel<AMOUNT_UNIT>> = {
  Component: NumberRangeInput,
  defaultProps: {},
  variants: [],
};
