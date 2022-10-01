import type { _UseErrorBoundaryModel } from '@lib/frontend/core/hooks/useErrorBoundary/_useErrorBoundary.models';

export interface UseErrorBoundaryParamsModel {}

export interface UseErrorBoundaryModel<TError extends Error = Error>
  extends _UseErrorBoundaryModel<TError> {}
