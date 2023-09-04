import { LongTermRatingForm } from '#lib-frontend/funding/containers/LongTermRatingForm/LongTermRatingForm';
import { type LongTermRatingFormPropsModel } from '#lib-frontend/funding/containers/LongTermRatingForm/LongTermRatingForm.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<LongTermRatingFormPropsModel> = {
  Component: LongTermRatingForm,
  defaultProps: {},
  variants: [],
};
