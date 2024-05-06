import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { GroupNameForm } from '@lib/frontend/group/containers/GroupNameForm/GroupNameForm';
import { type GroupNameFormPropsModel } from '@lib/frontend/group/containers/GroupNameForm/GroupNameForm.models';

export const props: LibraryPropsModel<GroupNameFormPropsModel> = {
  Component: GroupNameForm,
  defaultProps: {},
  variants: [],
};
