import { SIGN_IN } from '@lib/frontend/auth/auth.constants';
import { useRouter } from '@lib/frontend/routing/hooks/useRouter/useRouter';
import { useStore } from '@lib/frontend/user/stores/userReducer/userReducer';
import type { EntityResourcePartialModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';
import { useEffect } from 'react';

export const useCurrentUser = (): EntityResourcePartialModel<UserModel> | null | undefined => {
  const { currentUser } = useStore();
  const { replace } = useRouter();

  useEffect(() => {
    if (currentUser === null) {
      replace({ pathname: SIGN_IN });
    }
  }, [currentUser]);

  return currentUser;
};
