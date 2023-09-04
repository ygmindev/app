import { CreditRatingForm } from '#lib-frontend/funding/containers/CreditRatingForm/CreditRatingForm';
import { type CreditRatingFormPropsModel } from '#lib-frontend/funding/containers/CreditRatingForm/CreditRatingForm.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<CreditRatingFormPropsModel> = {
  Component: CreditRatingForm,
  defaultProps: {},
  variants: [],
};
