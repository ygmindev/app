import { _useSession } from '#lib-frontend/auth/hooks/useSession/_useSession';
import type { UseSessionModel } from '#lib-frontend/auth/hooks/useSession/useSession.models';
import { useErrorContext } from '#lib-frontend/core/hooks/useErrorContext/useErrorContext';

export const useSession = (): UseSessionModel => {
  const { handleError } = useErrorContext();
  return _useSession({ onError: handleError });
};
