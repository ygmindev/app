import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { GroupForm } from '@lib/frontend/group/containers/GroupForm/GroupForm';
import { type GroupFormPropsModel } from '@lib/frontend/group/containers/GroupForm/GroupForm.models';

export const props: LibraryPropsModel<GroupFormPropsModel> = {
  Component: GroupForm,
  defaultProps: {},
  variants: [],
};
