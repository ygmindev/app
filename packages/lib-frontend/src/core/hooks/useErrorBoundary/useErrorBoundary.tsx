import { _useErrorBoundary } from '@lib/frontend/core/hooks/useErrorBoundary/_useErrorBoundary';
import type { UseErrorBoundaryModel } from '@lib/frontend/core/hooks/useErrorBoundary/useErrorBoundary.models';

export const useErrorBoundary = <TError extends Error = Error>(): UseErrorBoundaryModel<TError> =>
  _useErrorBoundary();
