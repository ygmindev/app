import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { AppContainer } from '@lib/frontend/app/containers/AppContainer/AppContainer';
import { type AppContainerPropsModel } from '@lib/frontend/app/containers/AppContainer/AppContainer.models';

export const props: LibraryPropsModel<AppContainerPropsModel> = {
  Component: AppContainer,
  defaultProps: {},
  variants: [],
};
