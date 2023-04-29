import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { TimezoneField } from '@lib/frontend/locale/components/TimezoneField/TimezoneField';
import type { TimezoneFieldPropsModel } from '@lib/frontend/locale/components/TimezoneField/TimezoneField.models';

export const props: LibraryPropsModel<TimezoneFieldPropsModel> = {
  Component: TimezoneField,
  defaultProps: {},
  variants: [],
};
