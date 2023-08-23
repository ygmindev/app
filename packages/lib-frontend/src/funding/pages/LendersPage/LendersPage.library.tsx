import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { LendersPage } from '#lib-frontend/funding/pages/LendersPage/LendersPage';
import { type LendersPagePropsModel } from '#lib-frontend/funding/pages/LendersPage/LendersPage.models';

export const props: LibraryPropsModel<LendersPagePropsModel> = {
  defaultProps: {},
  Component: LendersPage,
  variants: [],
};
