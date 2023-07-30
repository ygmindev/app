import { ErrorBoundary } from '#lib-frontend/core/containers/ErrorBoundary/ErrorBoundary';
import { type ErrorBoundaryPropsModel } from '#lib-frontend/core/containers/ErrorBoundary/ErrorBoundary.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<ErrorBoundaryPropsModel> = {
  Component: ErrorBoundary,
  defaultProps: {},
  variants: [],
};
