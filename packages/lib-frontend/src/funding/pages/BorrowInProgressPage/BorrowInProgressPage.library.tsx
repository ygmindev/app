import { BorrowInProgressPage } from '#lib-frontend/funding/pages/BorrowInProgressPage/BorrowInProgressPage';
import { type BorrowInProgressPagePropsModel } from '#lib-frontend/funding/pages/BorrowInProgressPage/BorrowInProgressPage.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<BorrowInProgressPagePropsModel> = {
  Component: BorrowInProgressPage,
  defaultProps: {},
  variants: [],
};
