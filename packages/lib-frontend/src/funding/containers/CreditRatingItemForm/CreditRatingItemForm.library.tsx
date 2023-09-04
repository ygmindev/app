import { CreditRatingItemForm } from '#lib-frontend/funding/containers/CreditRatingItemForm/CreditRatingItemForm';
import { type CreditRatingItemFormPropsModel } from '#lib-frontend/funding/containers/CreditRatingItemForm/CreditRatingItemForm.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<CreditRatingItemFormPropsModel> = {
  Component: CreditRatingItemForm,
  defaultProps: {},
  variants: [],
};
