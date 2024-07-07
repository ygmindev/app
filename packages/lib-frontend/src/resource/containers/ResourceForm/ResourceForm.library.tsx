import { ResourceForm } from '@lib/frontend/resource/containers/ResourceForm/ResourceForm';
import { type ResourceFormPropsModel } from '@lib/frontend/resource/containers/ResourceForm/ResourceForm.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<ResourceFormPropsModel> = {
  Component: ResourceForm,
  defaultProps: {},
  variants: [],
};
