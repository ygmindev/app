import { FundingAmountForm } from '#lib-frontend/funding/containers/FundingAmountForm/FundingAmountForm';
import { type FundingAmountFormPropsModel } from '#lib-frontend/funding/containers/FundingAmountForm/FundingAmountForm.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<FundingAmountFormPropsModel> = {
  Component: FundingAmountForm,
  defaultProps: {},
  variants: [],
};
