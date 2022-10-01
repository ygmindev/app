import { _useErrorBoundary } from '@lib/frontend/core/hooks/useErrorBoundary/_useErrorBoundary';
import type {
  UseErrorBoundaryModel,
  UseErrorBoundaryParamsModel,
} from '@lib/frontend/core/hooks/useErrorBoundary/useErrorBoundary.models';

export const useErrorBoundary = <TError extends Error = Error>(
  props: UseErrorBoundaryParamsModel = {},
): UseErrorBoundaryModel<TError> => _useErrorBoundary();
