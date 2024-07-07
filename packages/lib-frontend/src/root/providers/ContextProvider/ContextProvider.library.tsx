import { ContextProvider } from '@lib/frontend/root/providers/ContextProvider/ContextProvider';
import { type ContextProviderPropsModel } from '@lib/frontend/root/providers/ContextProvider/ContextProvider.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<ContextProviderPropsModel> = {
  Component: ContextProvider,
  defaultProps: {},
  variants: [],
};
