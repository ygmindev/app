import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { ResourceDetailPage } from '@lib/frontend/resource/pages/ResourceDetailPage/ResourceDetailPage';
import { type ResourceDetailPagePropsModel } from '@lib/frontend/resource/pages/ResourceDetailPage/ResourceDetailPage.models';

export const props: LibraryPropsModel<ResourceDetailPagePropsModel> = {
  defaultProps: {},
  Component: ResourceDetailPage,
  variants: [],
};
