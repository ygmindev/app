import { useSession } from '@lib/frontend/auth/hooks/useSession/useSession';
import type { AuthProviderPropsModel } from '@lib/frontend/auth/providers/AuthProvider/AuthProvider.models';
import type { FCModel } from '@lib/frontend/core/core.models';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useEffect } from 'react';

export const AuthProvider: FCModel<AuthProviderPropsModel> = ({ children }) => {
  const actions = useActions();
  const { initialize } = useSession();

  useEffect(() => {
    initialize(async (signInToken) => {
      actions?.user.currentUserSet(
        signInToken ? { ...signInToken.claims, _id: signInToken._id } : null,
      );
    });
  }, []);

  return <>{children}</>;
};
