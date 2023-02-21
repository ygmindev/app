import { _useSession } from '@lib/frontend/auth/hooks/useSession/_useSession';
import type { UseSessionModel } from '@lib/frontend/auth/hooks/useSession/useSession.models';
import { useErrorBoundary } from '@lib/frontend/core/hooks/useErrorBoundary/useErrorBoundary';

export const useSession = (): UseSessionModel => {
  const { handleError } = useErrorBoundary();
  return _useSession({ onError: handleError });
};
