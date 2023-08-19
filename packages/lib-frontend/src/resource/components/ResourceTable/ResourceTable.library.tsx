import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { ResourceTable } from '#lib-frontend/resource/components/ResourceTable/ResourceTable';
import { type ResourceTablePropsModel } from '#lib-frontend/resource/components/ResourceTable/ResourceTable.models';

export const props: LibraryPropsModel<ResourceTablePropsModel> = {
  Component: ResourceTable,
  defaultProps: {},
  variants: [],
};
