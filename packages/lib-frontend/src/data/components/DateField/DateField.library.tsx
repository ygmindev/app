import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { DateField } from '@lib/frontend/data/components/DateField/DateField';
import { type DateFieldPropsModel } from '@lib/frontend/data/components/DateField/DateField.models';

export const props: LibraryPropsModel<DateFieldPropsModel> = {
  Component: DateField,
  defaultProps: {},
  variants: [],
};
