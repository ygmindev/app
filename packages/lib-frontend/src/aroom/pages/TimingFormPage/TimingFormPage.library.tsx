import { TimingFormPage } from '@lib/frontend/aroom/pages/TimingFormPage/TimingFormPage';
import { type TimingFormPagePropsModel } from '@lib/frontend/aroom/pages/TimingFormPage/TimingFormPage.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<TimingFormPagePropsModel> = {
  Component: TimingFormPage,
  defaultProps: {},
  variants: [],
};
