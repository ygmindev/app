import { BrightnessField } from '@lib/frontend/style/components/BrightnessField/BrightnessField';
import { type BrightnessFieldPropsModel } from '@lib/frontend/style/components/BrightnessField/BrightnessField.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<BrightnessFieldPropsModel> = {
  Component: BrightnessField,
  defaultProps: {},
  variants: [],
};
