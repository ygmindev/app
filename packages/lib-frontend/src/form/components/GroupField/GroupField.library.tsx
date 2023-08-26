import { GroupField } from '#lib-frontend/form/components/GroupField/GroupField';
import { type GroupFieldPropsModel } from '#lib-frontend/form/components/GroupField/GroupField.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<GroupFieldPropsModel> = {
  Component: GroupField,
  defaultProps: {},
  variants: [],
};
