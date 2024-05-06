import { CalendarPicker } from '@lib/frontend/data/components/CalendarPicker/CalendarPicker';
import { type CalendarPickerPropsModel } from '@lib/frontend/data/components/CalendarPicker/CalendarPicker.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<CalendarPickerPropsModel> = {
  Component: CalendarPicker,
  defaultProps: {},
  variants: [{ props: { isRange: true } }],
};
