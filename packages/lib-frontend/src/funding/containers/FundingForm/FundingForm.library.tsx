import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { FundingForm } from '#lib-frontend/funding/containers/FundingForm/FundingForm';
import { type FundingFormPropsModel } from '#lib-frontend/funding/containers/FundingForm/FundingForm.models';

export const props: LibraryPropsModel<FundingFormPropsModel> = {
  Component: FundingForm,
  defaultProps: {},
  variants: [],
};
