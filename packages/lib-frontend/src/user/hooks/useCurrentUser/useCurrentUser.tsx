import { useEffect } from 'react';

import { SIGN_IN } from '#lib-frontend/auth/auth.constants';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import type { EntityResourcePartialModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import type { UserModel } from '#lib-shared/user/resources/User/User.models';

export const useCurrentUser = (): EntityResourcePartialModel<UserModel> | null | undefined => {
  const currentUser = useStore((state) => state.user.currentUser);
  const { replace } = useRouter();

  useEffect(() => {
    if (currentUser === null) {
      replace({ pathname: SIGN_IN });
    }
  }, [currentUser]);

  return currentUser;
};
