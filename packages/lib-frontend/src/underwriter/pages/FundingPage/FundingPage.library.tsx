import { FundingPage } from '#lib-frontend/underwriter/pages/FundingPage/FundingPage';
import { type FundingPagePropsModel } from '#lib-frontend/underwriter/pages/FundingPage/FundingPage.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<FundingPagePropsModel> = {
  Component: FundingPage,
  defaultProps: {},
  variants: [],
};
