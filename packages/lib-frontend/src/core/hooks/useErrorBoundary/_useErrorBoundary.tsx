import type { _UseErrorBoundaryModel } from '@lib/frontend/core/hooks/useErrorBoundary/_useErrorBoundary.models';
import { useErrorHandler } from 'react-error-boundary';

export const _useErrorBoundary = <
  TError extends Error = Error,
>(): _UseErrorBoundaryModel<TError> => {
  const handleError = useErrorHandler();
  return { handleError };
};
