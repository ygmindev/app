import type { _ErrorBoundaryPropsModel } from '@lib/frontend/core/components/ErrorBoundary/_ErrorBoundary.models';
import type { PartialModel } from '@lib/shared/core/core.models';

export type ErrorBoundaryPropsModel = Omit<_ErrorBoundaryPropsModel, 'Fallback'> &
  PartialModel<Pick<_ErrorBoundaryPropsModel, 'Fallback'>>;
