import { ScaledNumberInput } from '@lib/frontend/data/components/ScaledNumberInput/ScaledNumberInput';
import { type ScaledNumberInputPropsModel } from '@lib/frontend/data/components/ScaledNumberInput/ScaledNumberInput.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<ScaledNumberInputPropsModel> = {
  Component: ScaledNumberInput,
  defaultProps: {},
  variants: [],
};
