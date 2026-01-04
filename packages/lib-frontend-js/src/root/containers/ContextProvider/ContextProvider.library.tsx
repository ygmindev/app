import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { ContextProvider } from '@lib/frontend/root/containers/ContextProvider/ContextProvider';
import { type ContextProviderPropsModel } from '@lib/frontend/root/containers/ContextProvider/ContextProvider.models';

export const props: LibraryPropsModel<ContextProviderPropsModel> = {
  Component: ContextProvider,
  defaultProps: {},
  variants: [],
};
