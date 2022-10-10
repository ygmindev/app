import { useSession } from '@lib/frontend/auth/hooks/useSession/useSession';
import type { AuthProviderPropsModel } from '@lib/frontend/auth/providers/AuthProvider/AuthProvider.models';
import type { FCModel } from '@lib/frontend/core/core.models';
import { dispatch } from '@lib/frontend/root/stores/store/store';
import { useUserResource } from '@lib/frontend/user/hooks/useUserResource/useUserResource';
import { userActions } from '@lib/frontend/user/stores/reducer/reducer';
import { useEffect } from 'react';

export const AuthProvider: FCModel<AuthProviderPropsModel> = ({ children }) => {
  const { get } = useUserResource();
  const { initialize } = useSession();

  useEffect(() => {
    initialize(async (signInToken) => {
      if (signInToken) {
        const { result } = await get({ filter: { _id: signInToken._id } });
        dispatch(userActions.currentUserSet(result));
      }
      dispatch(userActions.currentUserSet(null));
    });
  }, [get, initialize]);

  return <>{children}</>;
};
