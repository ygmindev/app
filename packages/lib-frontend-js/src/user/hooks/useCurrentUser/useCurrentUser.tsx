import { SIGN_IN } from '@lib/shared/auth/auth.constants';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import {
  type UseCurrentUserModel,
  type UseCurrentUserParamsModel,
} from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser.models';
import { useEffect } from 'react';

export const useCurrentUser = (
  { isProtected = true }: UseCurrentUserParamsModel = { isProtected: true },
): UseCurrentUserModel => {
  const [currentUser] = useStore('user.currentUser');
  const { replace } = useRouter();
  useEffect(() => {
    if (isProtected && currentUser === null) {
      void replace({ pathname: SIGN_IN });
    }
  }, [isProtected, currentUser]);

  return currentUser;
};
