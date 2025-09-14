import { ScaledNumberInput } from '@lib/frontend/data/components/ScaledNumberInput/ScaledNumberInput';
import { type ScaledNumberInputPropsModel } from '@lib/frontend/data/components/ScaledNumberInput/ScaledNumberInput.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { type AMOUNT_UNIT } from '@lib/shared/data/utils/numberFormat/numberFormat.constants';

export const props: LibraryPropsModel<ScaledNumberInputPropsModel<AMOUNT_UNIT>> = {
  Component: ScaledNumberInput,
  defaultProps: {},
  variants: [],
};
