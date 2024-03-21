import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { CheckboxInput } from '@lib/frontend/data/components/CheckboxInput/CheckboxInput';
import { type CheckboxInputPropsModel } from '@lib/frontend/data/components/CheckboxInput/CheckboxInput.models';

export const props: LibraryPropsModel<CheckboxInputPropsModel> = {
  Component: CheckboxInput,
  defaultProps: {},
  variants: [],
};
