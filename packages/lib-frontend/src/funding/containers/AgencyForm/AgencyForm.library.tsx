import { AgencyForm } from '#lib-frontend/funding/containers/AgencyForm/AgencyForm';
import { type AgencyFormPropsModel } from '#lib-frontend/funding/containers/AgencyForm/AgencyForm.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<AgencyFormPropsModel> = {
  Component: AgencyForm,
  defaultProps: {},
  variants: [],
};
