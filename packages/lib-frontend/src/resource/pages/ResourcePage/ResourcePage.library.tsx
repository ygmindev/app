import { ResourcePage } from '@lib/frontend/resource/pages/ResourcePage/ResourcePage';
import { type ResourcePagePropsModel } from '@lib/frontend/resource/pages/ResourcePage/ResourcePage.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<ResourcePagePropsModel> = {
  Component: ResourcePage,
  defaultProps: {},
  variants: [],
};
