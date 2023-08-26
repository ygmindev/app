import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { AmountForm } from '#lib-frontend/funding/containers/AmountForm/AmountForm';
import { type AmountFormPropsModel } from '#lib-frontend/funding/containers/AmountForm/AmountForm.models';

export const props: LibraryPropsModel<AmountFormPropsModel> = {
  Component: AmountForm,
  defaultProps: {},
  variants: [],
};
