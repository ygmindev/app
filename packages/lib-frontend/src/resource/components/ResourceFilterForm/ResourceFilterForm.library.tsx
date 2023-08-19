import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { ResourceFilterForm } from '#lib-frontend/resource/components/ResourceFilterForm/ResourceFilterForm';
import { type ResourceFilterFormPropsModel } from '#lib-frontend/resource/components/ResourceFilterForm/ResourceFilterForm.models';

export const props: LibraryPropsModel<ResourceFilterFormPropsModel> = {
  Component: ResourceFilterForm,
  defaultProps: {},
  variants: [],
};
