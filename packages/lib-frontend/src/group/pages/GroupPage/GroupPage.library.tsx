import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { GroupPage } from '@lib/frontend/group/pages/GroupPage/GroupPage';
import { type GroupPagePropsModel } from '@lib/frontend/group/pages/GroupPage/GroupPage.models';

export const props: LibraryPropsModel<GroupPagePropsModel> = {
  defaultProps: {},
  Component: GroupPage,
  variants: [],
};
