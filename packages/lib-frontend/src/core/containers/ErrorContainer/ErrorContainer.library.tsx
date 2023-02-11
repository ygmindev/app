import { ErrorContainer } from '@lib/frontend/core/containers/ErrorContainer/ErrorContainer';
import type { ErrorContainerPropsModel } from '@lib/frontend/core/containers/ErrorContainer/ErrorContainer.models';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<ErrorContainerPropsModel> = {
  Component: ErrorContainer,
  defaultProps: {},
  variants: [],
};
