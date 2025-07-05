import { CalendarInput } from '@lib/frontend/data/components/CalendarInput/CalendarInput';
import { type CalendarInputPropsModel } from '@lib/frontend/data/components/CalendarInput/CalendarInput.models';
import { LIBRARY_CATEGORY_FORM } from '@lib/frontend/library/components/Library/Library.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<CalendarInputPropsModel> = {
  Component: CalendarInput,
  category: LIBRARY_CATEGORY_FORM,
  defaultProps: {},
  variants: [{ props: { isRange: true } }],
};
