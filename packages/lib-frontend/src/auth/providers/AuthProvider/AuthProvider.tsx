import { useSession } from '@lib/frontend/auth/hooks/useSession/useSession';
import type { AuthProviderPropsModel } from '@lib/frontend/auth/providers/AuthProvider/AuthProvider.models';
import type { FCModel } from '@lib/frontend/core/core.models';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useUserResource } from '@lib/frontend/user/hooks/useUserResource/useUserResource';
import { useEffect } from 'react';

export const AuthProvider: FCModel<AuthProviderPropsModel> = ({ children }) => {
  const actions = useActions();
  const { initialize } = useSession();
  const { get } = useUserResource();

  useEffect(() => {
    initialize(async (signInToken) => {
      if (signInToken) {
        actions?.user.currentUserSet({ ...signInToken.claims, _id: signInToken._id });
        const { result } = await get({ filter: { _id: signInToken._id } });
        result && actions?.user.currentUserSet(result);
      } else {
        actions?.user.currentUserSet(null);
      }
    });
  }, []);

  return <>{children}</>;
};
