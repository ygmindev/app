import { FundingAgencyForm } from '#lib-frontend/funding/containers/FundingAgencyForm/FundingAgencyForm';
import { type FundingAgencyFormPropsModel } from '#lib-frontend/funding/containers/FundingAgencyForm/FundingAgencyForm.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<FundingAgencyFormPropsModel> = {
  Component: FundingAgencyForm,
  defaultProps: {},
  variants: [],
};
