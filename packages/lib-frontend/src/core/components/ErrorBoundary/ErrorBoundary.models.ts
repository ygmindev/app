import type { _ErrorBoundaryPropsModel } from '@lib/frontend/core/components/ErrorBoundary/_ErrorBoundary.models';
import type { PartialModel } from '@lib/shared/core/core.models';

export type ErrorBoundaryPropsModel<TError extends Error = Error> = Omit<
  _ErrorBoundaryPropsModel<TError>,
  'Fallback'
> &
  PartialModel<Pick<_ErrorBoundaryPropsModel<TError>, 'Fallback'>>;
