import { GroupFormPage } from '@lib/frontend/group/pages/GroupFormPage/GroupFormPage';
import { type GroupFormPagePropsModel } from '@lib/frontend/group/pages/GroupFormPage/GroupFormPage.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<GroupFormPagePropsModel> = {
  Component: GroupFormPage,
  defaultProps: {},
  variants: [],
};
