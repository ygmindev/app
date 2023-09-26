import { FundingMaturityForm } from '#lib-frontend/funding/containers/FundingMaturityForm/FundingMaturityForm';
import { type FundingMaturityFormPropsModel } from '#lib-frontend/funding/containers/FundingMaturityForm/FundingMaturityForm.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<FundingMaturityFormPropsModel> = {
  Component: FundingMaturityForm,
  defaultProps: {},
  variants: [],
};
