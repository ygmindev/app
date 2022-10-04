import { SIGN_IN } from '@lib/frontend/auth/auth.constants';
import { useSelector } from '@lib/frontend/root/hooks/useSelector/useSelector';
import { useRouter } from '@lib/frontend/routing/hooks/useRouter/useRouter';
import type { EntityResourcePartialModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

export const useCurrentUser = (): EntityResourcePartialModel<UserModel> | null => {
  const { replace } = useRouter();
  const user = useSelector((state) => state.user.currentUser);
  if (!user) {
    replace({ params: {}, pathname: SIGN_IN });
    return null;
  }
  return user;
};
