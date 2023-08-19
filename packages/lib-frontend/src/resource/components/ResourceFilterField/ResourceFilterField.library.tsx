import { ResourceFilterForm } from '#lib-frontend/resource/components/ResourceFilterField/ResourceFilterField';
import { type ResourceFilterFieldPropsModel } from '#lib-frontend/resource/components/ResourceFilterField/ResourceFilterField.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<ResourceFilterFieldPropsModel> = {
  Component: ResourceFilterForm,
  defaultProps: {},
  variants: [],
};
