import { FieldGroup } from '@lib-frontend/data/components/FieldGroup/FieldGroup';
import { type FieldGroupPropsModel } from '@lib-frontend/data/components/FieldGroup/FieldGroup.models';
import { type LibraryPropsModel } from '@lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<FieldGroupPropsModel> = {
  Component: FieldGroup,
  defaultProps: {},
  variants: [],
};
