import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { RequestForm } from '#lib-frontend/aroom/pages/RequestForm/RequestForm';
import { type RequestFormPropsModel } from '#lib-frontend/aroom/pages/RequestForm/RequestForm.models';

export const props: LibraryPropsModel<RequestFormPropsModel> = {
  Component: RequestForm,
  defaultProps: {},
  variants: [],
};
