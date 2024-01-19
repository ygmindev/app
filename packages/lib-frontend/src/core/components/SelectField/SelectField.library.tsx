import { SelectField } from '@lib/frontend/core/components/SelectField/SelectField';
import { type SelectFieldPropsModel } from '@lib/frontend/core/components/SelectField/SelectField.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<SelectFieldPropsModel> = {
  Component: SelectField,
  defaultProps: {
    options: [],
  },
  variants: [],
};
