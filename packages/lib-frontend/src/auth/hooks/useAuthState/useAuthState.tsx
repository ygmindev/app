import { AUTH_STATE } from '@lib/frontend/auth/hooks/useAuthState/useAuthState.constants';
import type { UseAuthStateModel } from '@lib/frontend/auth/hooks/useAuthState/useAuthState.models';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';

export const useAuthState = (): UseAuthStateModel => {
  const currentUser = useStore((state) => state.user.currentUser);
  switch (currentUser) {
    case undefined:
      return AUTH_STATE.UNKNOWN;
    case null:
      return AUTH_STATE.UNAUTHENTICATED;
    default:
      return AUTH_STATE.AUTHENTICATED;
  }
};
