import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { ResourceModal } from '#lib-frontend/resource/containers/ResourceModal/ResourceModal';
import { type ResourceModalPropsModel } from '#lib-frontend/resource/containers/ResourceModal/ResourceModal.models';

export const props: LibraryPropsModel<ResourceModalPropsModel> = {
  Component: ResourceModal,
  defaultProps: {},
  variants: [],
};
