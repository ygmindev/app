import { SIGN_IN } from '@lib/frontend/auth/auth.constants';
import { useSession } from '@lib/frontend/auth/hooks/useSession/useSession';
import { type AuthProviderPropsModel } from '@lib/frontend/auth/providers/AuthProvider/AuthProvider.models';
import { AUTH_STATUS } from '@lib/frontend/auth/stores/authStore/authStore.constants';
import { type AuthStatusModel } from '@lib/frontend/auth/stores/authStore/authStore.models';
import { type FCModel } from '@lib/frontend/core/core.models';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useUserResource } from '@lib/frontend/user/hooks/useUserResource/useUserResource';
import { type PartialModel } from '@lib/shared/core/core.models';
import { pubsub } from '@lib/shared/core/utils/PubSub/PubSub';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';
import { useEffect } from 'react';

export const AuthProvider: FCModel<AuthProviderPropsModel> = ({ children }) => {
  const { get } = useUserResource();
  const [authStatus, authStatusSet] = useStore('auth.status');
  const { initialize, signOut } = useSession({
    onError: () => authStatusSet(AUTH_STATUS.UNAUTHENTICATED),
  });
  const [, authTokenSet] = useStore('auth.token');
  const [currentUser, currentUserSet] = useStore('user.currentUser');

  useEffect(() => {
    void initialize({
      onAuthenticate: async (signInToken, token) => {
        token && authTokenSet({ access: token });
        let authStatusF: AuthStatusModel = currentUser
          ? AUTH_STATUS.AUTHENTICATED
          : AUTH_STATUS.UNAUTHENTICATED;

        if (signInToken) {
          if (currentUser?._id !== signInToken._id) {
            let user: PartialModel<UserModel> | undefined = {
              ...signInToken.claims,
              _id: signInToken._id,
            };
            const { result } = await get({ filter: [{ field: '_id', value: signInToken._id }] });
            user = result ?? undefined;
            if (user) {
              authStatusF = AUTH_STATUS.AUTHENTICATED;
            } else {
              await signOut();
              authStatusF = AUTH_STATUS.UNAUTHENTICATED;
            }
            currentUserSet(user);
          }
        }
        authStatusSet(authStatusF);
        pubsub.publish(SIGN_IN, authStatusF);
      },
      onTokenRefresh: async (token) => authTokenSet({ access: token }),
    });
  }, []);

  return <>{authStatus !== AUTH_STATUS.UNKNOWN && children}</>;
};
