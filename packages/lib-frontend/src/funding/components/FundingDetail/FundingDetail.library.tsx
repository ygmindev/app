import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { FundingDetail } from '#lib-frontend/funding/components/FundingDetail/FundingDetail';
import { type FundingDetailPropsModel } from '#lib-frontend/funding/components/FundingDetail/FundingDetail.models';

export const props: LibraryPropsModel<FundingDetailPropsModel> = {
  Component: FundingDetail,
  defaultProps: {},
  variants: [],
};
