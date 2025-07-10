import { useAuth } from '@lib/frontend/auth/hooks/useAuth/useAuth';
import { useSignInResource } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource';
import { type AuthProviderPropsModel } from '@lib/frontend/auth/providers/AuthProvider/AuthProvider.models';
import { AUTH_STATUS } from '@lib/frontend/auth/stores/authStore/authStore.constants';
import { type FCModel } from '@lib/frontend/core/core.models';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useUserResource } from '@lib/frontend/user/hooks/useUserResource/useUserResource';
import { type UserModel } from '@lib/model/user/User/User.models';
import { UnauthenticatedError } from '@lib/shared/auth/errors/UnauthenticatedError/UnauthenticatedError';

export const AuthProvider: FCModel<AuthProviderPropsModel> = ({ children }) => {
  const { get } = useUserResource();
  const [authStatus] = useStore('auth.status');
  const [, authTokenSet] = useStore('auth.token');
  const { setAuth } = useSignInResource();

  useAuth({
    onAuthenticate: async (signInToken, token) => {
      let user: Partial<UserModel> | undefined = signInToken;
      const uid = signInToken?._id;
      if (uid) {
        // TODO: throw erorr on backend if no signInToken
        user = (await get({ filter: [{ field: '_id', value: signInToken._id }] }))?.result;
      } else {
        throw new UnauthenticatedError();
      }
      await setAuth(token, user);
    },

    onTokenRefresh: async (token) => authTokenSet({ access: token }),
  });

  return <>{authStatus !== AUTH_STATUS.UNKNOWN && children}</>;
};
