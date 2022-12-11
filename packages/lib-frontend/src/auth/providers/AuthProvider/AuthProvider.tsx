import { useSession } from '@lib/frontend/auth/hooks/useSession/useSession';
import type { AuthProviderPropsModel } from '@lib/frontend/auth/providers/AuthProvider/AuthProvider.models';
import type { FCModel } from '@lib/frontend/core/core.models';
import { actions } from '@lib/frontend/user/stores/userReducer/userReducer';
import { useEffect } from 'react';

export const AuthProvider: FCModel<AuthProviderPropsModel> = ({ children }) => {
  const { initialize } = useSession();
  useEffect(() => {
    initialize(async (signInToken) => {
      actions.currentUserSet(signInToken ? { ...signInToken.claims, _id: signInToken._id } : null);
    });
  }, [initialize]);

  return <>{children}</>;
};
