import { ErrorProvider } from '#lib-frontend/core/providers/ErrorProvider/ErrorProvider';
import { type ErrorProviderPropsModel } from '#lib-frontend/core/providers/ErrorProvider/ErrorProvider.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<ErrorProviderPropsModel> = {
  Component: ErrorProvider,
  defaultProps: {},
  variants: [],
};
