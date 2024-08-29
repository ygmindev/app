import { BrightnessInput } from '@lib/frontend/style/components/BrightnessInput/BrightnessInput';
import { type BrightnessInputPropsModel } from '@lib/frontend/style/components/BrightnessInput/BrightnessInput.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<BrightnessInputPropsModel> = {
  Component: BrightnessInput,
  defaultProps: {},
  variants: [],
};
