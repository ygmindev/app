import { RadioField } from '@lib/frontend/core/components/RadioField/RadioField';
import type { RadioFieldPropsModel } from '@lib/frontend/core/components/RadioField/RadioField.models';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<RadioFieldPropsModel> = {
  Component: RadioField,
  defaultProps: {
    options: [],
  },
  variants: [],
};
