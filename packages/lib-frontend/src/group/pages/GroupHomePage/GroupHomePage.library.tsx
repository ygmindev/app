import { GroupHomePage } from '#lib-frontend/group/pages/GroupHomePage/GroupHomePage';
import { type GroupHomePagePropsModel } from '#lib-frontend/group/pages/GroupHomePage/GroupHomePage.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<GroupHomePagePropsModel> = {
  Component: GroupHomePage,
  defaultProps: {},
  variants: [],
};
