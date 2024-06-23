import { SIGN_IN } from '@lib/frontend/auth/auth.constants';
import { useSession } from '@lib/frontend/auth/hooks/useSession/useSession';
import { type AuthProviderPropsModel } from '@lib/frontend/auth/providers/AuthProvider/AuthProvider.models';
import { AUTH_STATUS } from '@lib/frontend/auth/stores/authStore/authStore.constants';
import { type AuthStatusModel } from '@lib/frontend/auth/stores/authStore/authStore.models';
import { type FCModel } from '@lib/frontend/core/core.models';
import { useAsync } from '@lib/frontend/core/hooks/useAsync/useAsync';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useUserResource } from '@lib/frontend/user/hooks/useUserResource/useUserResource';
import { type PartialModel } from '@lib/shared/core/core.models';
import { pubsub } from '@lib/shared/core/utils/PubSub/PubSub';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export const AuthProvider: FCModel<AuthProviderPropsModel> = ({ children }) => {
  const { get } = useUserResource();
  const [authStatus, authStatusSet] = useStore('auth.status');
  const { initialize, signOut } = useSession({
    onError: () => authStatusSet(AUTH_STATUS.UNAUTHENTICATED),
  });
  const [, authTokenSet] = useStore('auth.token');
  const [currentUser, currentUserSet] = useStore('user.currentUser');

  useAsync(async (isMounted) => {
    void initialize({
      onAuthenticate: async (signInToken, token) => {
        token && authTokenSet({ access: token });
        if (isMounted()) {
          let authStatus: AuthStatusModel = AUTH_STATUS.UNAUTHENTICATED;
          if (signInToken) {
            if (currentUser?._id !== signInToken._id) {
              let user: PartialModel<UserModel> | undefined = {
                ...signInToken.claims,
                _id: signInToken._id,
              };
              const { result } = await get({ filter: [{ field: '_id', value: signInToken._id }] });
              user = result ?? undefined;
              if (user) {
                authStatus = AUTH_STATUS.AUTHENTICATED;
              } else {
                await signOut();
                authStatus = AUTH_STATUS.UNAUTHENTICATED;
              }
              currentUserSet(user);
            }
          }
          authStatusSet(authStatus);
          pubsub.publish(SIGN_IN, authStatus);
        }
      },
      onTokenRefresh: async (token) => authTokenSet({ access: token }),
    });
  });

  return <>{authStatus !== AUTH_STATUS.UNKNOWN && children}</>;
};
