import { CreditRatingCategoryForm } from '#lib-frontend/funding/containers/CreditRatingValueForm/CreditRatingValueForm';
import { type CreditRatingCategoryFormPropsModel } from '#lib-frontend/funding/containers/CreditRatingValueForm/CreditRatingValueForm.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<CreditRatingCategoryFormPropsModel> = {
  Component: CreditRatingCategoryForm,
  defaultProps: {},
  variants: [],
};
