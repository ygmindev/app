import { CalendarInput } from '@lib/frontend/data/components/CalendarInput/CalendarInput';
import { type CalendarInputPropsModel } from '@lib/frontend/data/components/CalendarInput/CalendarInput.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<CalendarInputPropsModel> = {
  Component: CalendarInput,
  defaultProps: {},
  variants: [{ props: { isRange: true } }],
};
