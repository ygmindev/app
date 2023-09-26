import { FundingCurrencyForm } from '#lib-frontend/funding/containers/FundingCurrencyForm/FundingCurrencyForm';
import { type FundingCurrencyFormPropsModel } from '#lib-frontend/funding/containers/FundingCurrencyForm/FundingCurrencyForm.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<FundingCurrencyFormPropsModel> = {
  Component: FundingCurrencyForm,
  defaultProps: {},
  variants: [],
};
