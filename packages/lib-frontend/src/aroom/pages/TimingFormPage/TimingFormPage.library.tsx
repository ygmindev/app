import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { TimingFormPage } from '#lib-frontend/aroom/pages/TimingFormPage/TimingFormPage';
import { type TimingFormPagePropsModel } from '#lib-frontend/aroom/pages/TimingFormPage/TimingFormPage.models';

export const props: LibraryPropsModel<TimingFormPagePropsModel> = {
  defaultProps: {},
  Component: TimingFormPage,
  variants: [],
};
