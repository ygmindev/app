import { DateInput } from '@lib/frontend/data/components/DateInput/DateInput';
import { type DateInputPropsModel } from '@lib/frontend/data/components/DateInput/DateInput.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<DateInputPropsModel> = {
  Component: DateInput,
  defaultProps: {},
  variants: [],
};
