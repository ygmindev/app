import type { _ErrorBoundaryPropsModel } from '@lib/frontend/core/components/ErrorBoundary/_ErrorBoundary.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { ErrorBoundaryProps, FallbackProps } from 'react-error-boundary';
import { ErrorBoundary } from 'react-error-boundary';

export const _ErrorBoundary = composeComponent<_ErrorBoundaryPropsModel, ErrorBoundaryProps>({
  Component: ErrorBoundary,

  getProps: ({ Fallback, children, onError }) => ({
    FallbackComponent: <TError extends Error = Error>({
      error,
      resetErrorBoundary,
    }: FallbackProps) =>
      onError ? (
        <>{children}</>
      ) : Fallback ? (
        <Fallback<TError>
          error={error as TError}
          handleReset={resetErrorBoundary}
        />
      ) : null,
    children,
    onError,
  }),
});
