import { NumberRangeInput } from '@lib/frontend/data/components/NumberRangeInput/NumberRangeInput';
import { type NumberRangeInputPropsModel } from '@lib/frontend/data/components/NumberRangeInput/NumberRangeInput.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { type AmountUnitModel } from '@lib/shared/data/utils/numberFormat/numberFormat.models';

export const props: LibraryPropsModel<NumberRangeInputPropsModel<AmountUnitModel>> = {
  Component: NumberRangeInput,
  defaultProps: {},
  variants: [],
};
