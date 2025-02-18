import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { ContainerProvider } from '@lib/frontend/core/containers/ContainerProvider/ContainerProvider';
import { type ContainerProviderPropsModel } from '@lib/frontend/core/containers/ContainerProvider/ContainerProvider.models';

export const props: LibraryPropsModel<ContainerProviderPropsModel> = {
  Component: ContainerProvider,
  defaultProps: {},
  variants: [],
};
