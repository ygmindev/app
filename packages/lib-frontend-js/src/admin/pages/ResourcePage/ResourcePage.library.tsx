import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { ResourcePage } from '@lib/frontend/admin/pages/ResourcePage/ResourcePage';
import { type ResourcePagePropsModel } from '@lib/frontend/admin/pages/ResourcePage/ResourcePage.models';

export const props: LibraryPropsModel<ResourcePagePropsModel> = {
  defaultProps: {},
  Component: ResourcePage,
  variants: [],
};
