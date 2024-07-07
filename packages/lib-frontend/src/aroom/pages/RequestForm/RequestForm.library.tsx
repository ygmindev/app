import { RequestForm } from '@lib/frontend/aroom/pages/RequestForm/RequestForm';
import { type RequestFormPropsModel } from '@lib/frontend/aroom/pages/RequestForm/RequestForm.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<RequestFormPropsModel> = {
  Component: RequestForm,
  defaultProps: {},
  variants: [],
};
