import type { ErrorProviderPropsModel } from '@lib/frontend/app/providers/ErrorProvider/ErrorProvider.models';
import { ErrorBoundary } from '@lib/frontend/core/components/ErrorBoundary/ErrorBoundary';
import type { FCModel } from '@lib/frontend/core/core.models';

export const ErrorProvider: FCModel<ErrorProviderPropsModel> = ({ children }) => (
  <ErrorBoundary>{children}</ErrorBoundary>
);
