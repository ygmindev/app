import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { KfnMembersPage } from '@lib/frontend/kfn/pages/KfnMembersPage/KfnMembersPage';
import { type KfnMembersPagePropsModel } from '@lib/frontend/kfn/pages/KfnMembersPage/KfnMembersPage.models';

export const props: LibraryPropsModel<KfnMembersPagePropsModel> = {
  defaultProps: {},
  Component: KfnMembersPage,
  variants: [],
};
