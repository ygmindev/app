import { SIGN_IN } from '@lib/frontend/auth/auth.constants';
import { useSelector } from '@lib/frontend/root/hooks/useSelector/useSelector';
import { useRouter } from '@lib/frontend/routing/hooks/useRouter/useRouter';
import type { EntityResourcePartialModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';
import { useEffect } from 'react';

export const useCurrentUser = (): EntityResourcePartialModel<UserModel> | null | undefined => {
  const user = useSelector((state) => state.user.currentUser);
  const { replace } = useRouter();

  useEffect(() => {
    if (user === null) {
      replace({ pathname: SIGN_IN });
    }
  }, [user]);

  return user;
};
