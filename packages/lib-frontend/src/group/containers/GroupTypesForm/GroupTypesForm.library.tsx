import { GroupTypesForm } from '@lib/frontend/group/containers/GroupTypesForm/GroupTypesForm';
import { type GroupTypesFormPropsModel } from '@lib/frontend/group/containers/GroupTypesForm/GroupTypesForm.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<GroupTypesFormPropsModel> = {
  Component: GroupTypesForm,
  defaultProps: {},
  variants: [],
};
