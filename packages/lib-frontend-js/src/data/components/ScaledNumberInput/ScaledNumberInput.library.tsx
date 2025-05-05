import { ScaledNumberInput } from '@lib/frontend/data/components/ScaledNumberInput/ScaledNumberInput';
import { type ScaledNumberInputPropsModel } from '@lib/frontend/data/components/ScaledNumberInput/ScaledNumberInput.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { type AmountUnitModel } from '@lib/shared/data/utils/numberFormat/numberFormat.models';

export const props: LibraryPropsModel<ScaledNumberInputPropsModel<AmountUnitModel>> = {
  Component: ScaledNumberInput,
  defaultProps: {},
  variants: [],
};
