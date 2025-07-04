import { DateInput } from '@lib/frontend/data/components/DateInput/DateInput';
import { type DateInputPropsModel } from '@lib/frontend/data/components/DateInput/DateInput.models';
import { LIBRARY_CATEGORY_FORM } from '@lib/frontend/library/components/Library/Library.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<DateInputPropsModel> = {
  Component: DateInput,
  category: LIBRARY_CATEGORY_FORM,
  defaultProps: {
    label: 'date',
  },
  variants: [],
};
