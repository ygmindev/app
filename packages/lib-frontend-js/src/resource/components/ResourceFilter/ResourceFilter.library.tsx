import { ResourceFilter } from '@lib/frontend/resource/components/ResourceFilter/ResourceFilter';
import { type ResourceFilterPropsModel } from '@lib/frontend/resource/components/ResourceFilter/ResourceFilter.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<ResourceFilterPropsModel> = {
  Component: ResourceFilter,
  defaultProps: {},
  variants: [],
};
