import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { ResourceFilter } from '@lib/frontend/resource/components/ResourceFilter/ResourceFilter';
import { type ResourceFilterPropsModel } from '@lib/frontend/resource/components/ResourceFilter/ResourceFilter.models';

export const props: LibraryPropsModel<ResourceFilterPropsModel<Record<string, string>, string>> = {
  Component: ResourceFilter,
  defaultProps: {
    field: { id: '' },
    onSubmit: async () => {},
  },
  variants: [],
};
