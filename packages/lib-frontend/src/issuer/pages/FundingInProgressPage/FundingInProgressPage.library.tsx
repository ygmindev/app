import { FundingInProgressPage } from '#lib-frontend/issuer/pages/FundingInProgressPage/FundingInProgressPage';
import { type FundingInProgressPagePropsModel } from '#lib-frontend/issuer/pages/FundingInProgressPage/FundingInProgressPage.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<FundingInProgressPagePropsModel> = {
  Component: FundingInProgressPage,
  defaultProps: {},
  variants: [],
};
