import { AUTH_STATE } from '#lib-frontend/auth/hooks/useAuthState/useAuthState.constants';
import { type UseAuthStateModel } from '#lib-frontend/auth/hooks/useAuthState/useAuthState.models';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { isEmpty } from '#lib-shared/core/utils/isEmpty/isEmpty';

export const useAuthState = (): UseAuthStateModel => {
  const [currentUser] = useStore('user.currentUser');
  return currentUser === null
    ? AUTH_STATE.UNAUTHENTICATED
    : isEmpty(currentUser)
      ? AUTH_STATE.UNKNOWN
      : AUTH_STATE.AUTHENTICATED;
};
