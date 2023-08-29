import { MaturityForm } from '#lib-frontend/funding/containers/MaturityForm/MaturityForm';
import { type MaturityFormPropsModel } from '#lib-frontend/funding/containers/MaturityForm/MaturityForm.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<MaturityFormPropsModel> = {
  Component: MaturityForm,
  defaultProps: {},
  variants: [],
};
