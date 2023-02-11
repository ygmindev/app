import { _ErrorBoundary } from '@lib/frontend/core/components/ErrorBoundary/_ErrorBoundary';
import type { _ErrorBoundaryPropsModel } from '@lib/frontend/core/components/ErrorBoundary/_ErrorBoundary.models';
import type { ErrorBoundaryPropsModel } from '@lib/frontend/core/components/ErrorBoundary/ErrorBoundary.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const ErrorBoundary = composeComponent<ErrorBoundaryPropsModel, _ErrorBoundaryPropsModel>({
  Component: _ErrorBoundary,
});

process.env.APP_DEBUG && (ErrorBoundary.displayName = variableName(() => ErrorBoundary));
