import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';

export const useIsAuthenticated = (): boolean => {
  const currentUser = useStore((state) => state.user.currentUser);
  return currentUser !== undefined && currentUser !== null;
};
