import { useEffect } from 'react';

import { SIGN_IN } from '@lib/frontend/auth/auth.constants';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { type UseCurrentUserModel } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser.models';

export const useCurrentUser = (): UseCurrentUserModel => {
  const [currentUser] = useStore('user.currentUser');
  const { replace } = useRouter();
  useEffect(() => {
    if (currentUser === null) {
      void replace({ pathname: SIGN_IN });
    }
  }, [currentUser]);

  return currentUser;
};
