import { TimezoneInput } from '@lib/frontend/locale/components/TimezoneInput/TimezoneInput';
import { type TimezoneInputPropsModel } from '@lib/frontend/locale/components/TimezoneInput/TimezoneInput.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<TimezoneInputPropsModel> = {
  Component: TimezoneInput,
  defaultProps: {},
  variants: [],
};
