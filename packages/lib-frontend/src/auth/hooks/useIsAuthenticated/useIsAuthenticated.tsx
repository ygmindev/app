import type { UseIsAuthenticatedModel } from '@lib/frontend/auth/hooks/useIsAuthenticated/useIsAuthenticated.models';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';

export const useIsAuthenticated = (): UseIsAuthenticatedModel => {
  const currentUser = useStore((state) => state.user.currentUser);
  return currentUser !== undefined && currentUser !== null;
};
