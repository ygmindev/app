import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { BorrowPage } from '#lib-frontend/funding/pages/BorrowPage/BorrowPage';
import { type BorrowPagePropsModel } from '#lib-frontend/funding/pages/BorrowPage/BorrowPage.models';

export const props: LibraryPropsModel<BorrowPagePropsModel> = {
  defaultProps: {},
  Component: BorrowPage,
  variants: [],
};
