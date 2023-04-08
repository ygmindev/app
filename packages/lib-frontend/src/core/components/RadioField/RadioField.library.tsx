import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { RadioField } from '@lib/frontend/core/components/RadioField/RadioField';
import type { RadioFieldPropsModel } from '@lib/frontend/core/components/RadioField/RadioField.models';

export const props: LibraryPropsModel<RadioFieldPropsModel> = {
  Component: RadioField,
  defaultProps: {},
  variants: [],
};
