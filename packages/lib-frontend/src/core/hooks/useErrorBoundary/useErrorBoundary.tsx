import { _useErrorBoundary } from '@lib/frontend/core/hooks/useErrorBoundary/_useErrorBoundary';
import type { UseErrorBoundaryModel } from '@lib/frontend/core/hooks/useErrorBoundary/useErrorBoundary.models';

export const useErrorBoundary = (): UseErrorBoundaryModel => _useErrorBoundary();
