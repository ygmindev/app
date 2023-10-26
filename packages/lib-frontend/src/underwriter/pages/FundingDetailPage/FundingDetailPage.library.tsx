import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { FundingDetailPage } from '#lib-frontend/underwriter/pages/FundingDetailPage/FundingDetailPage';
import { type FundingDetailPagePropsModel } from '#lib-frontend/underwriter/pages/FundingDetailPage/FundingDetailPage.models';

export const props: LibraryPropsModel<FundingDetailPagePropsModel> = {
  defaultProps: {},
  Component: FundingDetailPage,
  variants: [],
};
