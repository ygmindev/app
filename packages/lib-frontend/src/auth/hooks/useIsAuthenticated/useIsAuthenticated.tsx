import { useStore } from '@lib/frontend/user/stores/userReducer/userReducer';

export const useIsAuthenticated = (): boolean => {
  const { currentUser } = useStore();
  return currentUser !== undefined && currentUser !== null;
};
