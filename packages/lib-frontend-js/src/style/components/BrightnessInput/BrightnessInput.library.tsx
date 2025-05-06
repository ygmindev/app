import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { BrightnessInput } from '@lib/frontend/style/components/BrightnessInput/BrightnessInput';
import { type BrightnessInputPropsModel } from '@lib/frontend/style/components/BrightnessInput/BrightnessInput.models';

export const props: LibraryPropsModel<BrightnessInputPropsModel> = {
  Component: BrightnessInput,
  defaultProps: {},
  variants: [],
};
