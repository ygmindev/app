import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { FundingSummaryPage } from '#lib-frontend/funding/pages/FundingSummaryPage/FundingSummaryPage';
import { type FundingSummaryPagePropsModel } from '#lib-frontend/funding/pages/FundingSummaryPage/FundingSummaryPage.models';

export const props: LibraryPropsModel<FundingSummaryPagePropsModel> = {
  defaultProps: {},
  Component: FundingSummaryPage,
  variants: [],
};
