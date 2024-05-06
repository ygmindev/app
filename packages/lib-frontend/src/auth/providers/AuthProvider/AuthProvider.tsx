import { useSession } from '@lib/frontend/auth/hooks/useSession/useSession';
import { type AuthProviderPropsModel } from '@lib/frontend/auth/providers/AuthProvider/AuthProvider.models';
import { AUTH_STATUS } from '@lib/frontend/auth/stores/authStore/authStore.constants';
import { type FCModel } from '@lib/frontend/core/core.models';
import { useAsync } from '@lib/frontend/core/hooks/useAsync/useAsync';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useUserResource } from '@lib/frontend/user/hooks/useUserResource/useUserResource';
import { type PartialModel } from '@lib/shared/core/core.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export const AuthProvider: FCModel<AuthProviderPropsModel> = ({ children }) => {
  const { get } = useUserResource();
  const [authStatus, authStatusSet] = useStore('auth.status');
  const { initialize } = useSession({ onError: () => authStatusSet(AUTH_STATUS.UNAUTHENTICATED) });
  const [, authTokenSet] = useStore('auth.token');
  const [currentUser, currentUserSet] = useStore('user.currentUser');

  useAsync(async (isMounted) => {
    void initialize({
      onAuthenticate: async (signInToken, token) => {
        token && authTokenSet({ access: token });
        if (isMounted()) {
          if (signInToken && currentUser?._id !== signInToken._id) {
            let user: PartialModel<UserModel> = { ...signInToken.claims, _id: signInToken._id };
            try {
              const { result } = await get({ filter: [{ field: '_id', value: signInToken._id }] });
              result && (user = result);
            } finally {
              currentUserSet(user);
              authStatusSet(AUTH_STATUS.AUTHENTICATED);
            }
          } else {
            authStatusSet(AUTH_STATUS.UNAUTHENTICATED);
          }
        }
      },
      onTokenRefresh: async (token) => authTokenSet({ access: token }),
    });
  });

  return <>{authStatus !== AUTH_STATUS.UNKNOWN && children}</>;
};
