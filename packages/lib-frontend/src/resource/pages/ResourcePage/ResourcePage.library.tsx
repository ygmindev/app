import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { ResourcePage } from '#lib-frontend/resource/pages/ResourcePage/ResourcePage';
import { type ResourcePagePropsModel } from '#lib-frontend/resource/pages/ResourcePage/ResourcePage.models';

export const props: LibraryPropsModel<ResourcePagePropsModel> = {
  defaultProps: {},
  Component: ResourcePage,
  variants: [],
};
