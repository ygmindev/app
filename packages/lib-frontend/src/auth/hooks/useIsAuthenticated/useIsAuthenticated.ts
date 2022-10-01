import { useSelector } from '@lib/frontend/root/hooks/useSelector/useSelector';

export const useIsAuthenticated = (): boolean => {
  const user = useSelector((state) => state.user.currentUser);
  return user !== undefined && user !== null;
};
