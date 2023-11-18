import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { FundingFilter } from '#lib-frontend/funding/containers/FundingFilter/FundingFilter';
import { type FundingFilterPropsModel } from '#lib-frontend/funding/containers/FundingFilter/FundingFilter.models';

export const props: LibraryPropsModel<FundingFilterPropsModel> = {
  Component: FundingFilter,
  defaultProps: {},
  variants: [],
};
