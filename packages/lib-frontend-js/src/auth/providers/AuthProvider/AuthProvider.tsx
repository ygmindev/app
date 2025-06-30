import { sleepForTransition } from '@lib/frontend/animation/utils/sleepForTransition/sleepForTransition';
import { useAuth } from '@lib/frontend/auth/hooks/useAuth/useAuth';
import { useSession } from '@lib/frontend/auth/hooks/useSession/useSession';
import { type AuthProviderPropsModel } from '@lib/frontend/auth/providers/AuthProvider/AuthProvider.models';
import { AUTH_STATUS } from '@lib/frontend/auth/stores/authStore/authStore.constants';
import { type AuthStatusModel } from '@lib/frontend/auth/stores/authStore/authStore.models';
import { type FCModel } from '@lib/frontend/core/core.models';
import { useContainer } from '@lib/frontend/core/hooks/useContainer/useContainer';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useUserResource } from '@lib/frontend/user/hooks/useUserResource/useUserResource';
import { SIGN_IN } from '@lib/shared/auth/auth.constants';
import { type PartialModel } from '@lib/shared/core/core.models';
import { PubSub } from '@lib/shared/core/utils/PubSub/PubSub';
import { type UserModel } from '@lib/model/user/User/User.models';

export const AuthProvider: FCModel<AuthProviderPropsModel> = ({ children }) => {
  const { get } = useUserResource();
  const [authStatus, authStatusSet] = useStore('auth.status');
  const { signOut } = useSession();
  const [, authTokenSet] = useStore('auth.token');
  const [currentUser, currentUserSet] = useStore('user.currentUser');
  const pubsub = useContainer(PubSub);

  useAuth({
    onAuthenticate: async (signInToken, token) => {
      token && authTokenSet({ access: token });
      let authStatusF: AuthStatusModel = currentUser
        ? AUTH_STATUS.AUTHENTICATED
        : AUTH_STATUS.UNAUTHENTICATED;

      // TODO: load full user from fields
      if (!signInToken || currentUser?._id !== signInToken._id || !currentUser.email) {
        let user: PartialModel<UserModel> | undefined = signInToken
          ? { ...signInToken.claims, _id: signInToken._id }
          : undefined;
        if (signInToken) {
          user = (await get({ filter: [{ field: '_id', value: signInToken._id }] }))?.result;
        }
        if (user) {
          authStatusF = AUTH_STATUS.AUTHENTICATED;
        } else {
          authStatusF = AUTH_STATUS.UNAUTHENTICATED;
          await sleepForTransition();
          await signOut();
        }
        currentUserSet(user);
      }
      authStatusSet(authStatusF);
      pubsub.publish(SIGN_IN, authStatusF);
    },
    onTokenRefresh: async (token) => authTokenSet({ access: token }),
  });

  return <>{authStatus !== AUTH_STATUS.UNKNOWN && children}</>;
};
