import { GroupNameForm } from '@lib/frontend/group/containers/GroupNameForm/GroupNameForm';
import { type GroupNameFormPropsModel } from '@lib/frontend/group/containers/GroupNameForm/GroupNameForm.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<GroupNameFormPropsModel> = {
  Component: GroupNameForm,
  defaultProps: {},
  variants: [],
};
