import type { _ErrorBoundaryPropsModel } from '@lib/frontend/core/components/ErrorBoundary/_ErrorBoundary.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { ErrorBoundaryProps, FallbackProps } from 'react-error-boundary';
import { ErrorBoundary } from 'react-error-boundary';

export const _ErrorBoundary = composeComponent<_ErrorBoundaryPropsModel, ErrorBoundaryProps>({
  Component: ErrorBoundary,

  getProps: ({ Fallback, children, onError, style }) => ({
    FallbackComponent: ({ error, resetErrorBoundary }: FallbackProps) => (
      <Wrapper
        grow
        style={style}>
        {onError ? (
          children
        ) : Fallback ? (
          <Fallback
            error={error}
            handleReset={resetErrorBoundary}
          />
        ) : null}
      </Wrapper>
    ),
    children,
    onError,
  }),
});
