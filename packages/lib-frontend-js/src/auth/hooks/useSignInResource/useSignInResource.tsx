import { sleepForTransition } from '@lib/frontend/animation/utils/sleepForTransition/sleepForTransition';
import { useSession } from '@lib/frontend/auth/hooks/useSession/useSession';
import { type UseSignInResourceModel } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource.models';
import { AUTH_STATUS } from '@lib/frontend/auth/stores/authStore/authStore.constants';
import { type AuthStatusModel } from '@lib/frontend/auth/stores/authStore/authStore.models';
import { useContainer } from '@lib/frontend/core/hooks/useContainer/useContainer';
import { useAppGraphql } from '@lib/frontend/data/hooks/useAppGraphql/useAppGraphql';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useTracking } from '@lib/frontend/tracking/hooks/useTracking/useTracking';
import { USER_RESOURCE_PARAMS } from '@lib/frontend/user/resources/User/User.constants';
import { type SignInModel } from '@lib/model/auth/SignIn/SignIn.models';
import { SIGN_IN_INPUT } from '@lib/model/auth/SignIn/SignInInput/SignInInput.constants';
import { type SignInInputModel } from '@lib/model/auth/SignIn/SignInInput/SignInInput.models';
import { type UserModel } from '@lib/model/user/User/User.models';
import { SIGN_IN, USERNAME_UPDATE, VERIFY_TOKEN } from '@lib/shared/auth/auth.constants';
import { UnauthorizedError } from '@lib/shared/auth/errors/UnauthorizedError/UnauthorizedError';
import { type PartialModel } from '@lib/shared/core/core.models';
import { PubSub } from '@lib/shared/core/utils/PubSub/PubSub';

const USER_FIELDS = USER_RESOURCE_PARAMS.fields.map(({ fields, id }) =>
  fields ? { [id]: fields.map((v) => v.id) } : id,
);

export const useSignInResource = (): UseSignInResourceModel => {
  const [currentUser, currentUserSet] = useStore('user.currentUser');
  const { identify, reset } = useTracking();
  const { signInWithToken, signOut } = useSession();
  const [, authStatusSet] = useStore('auth.status');
  const [, authTokenSet] = useStore('auth.token');
  const pubsub = useContainer(PubSub);

  const { query } = useAppGraphql();

  const signIn = async (signIn?: PartialModel<SignInModel>): Promise<void> => {
    // await handleSignOut();
    if (signIn) {
      const { token, user } = signIn;
      user && currentUserSet(user);
      token && (await signInWithToken(token));
    } else {
      throw new UnauthorizedError();
    }
  };

  const setAuth = async (token?: string, user?: Partial<UserModel>): Promise<void> => {
    authTokenSet({ access: token ?? undefined });

    let authStatusF: AuthStatusModel = currentUser
      ? AUTH_STATUS.AUTHENTICATED
      : AUTH_STATUS.UNAUTHENTICATED;

    // TODO: load full user from fields
    if (!token || currentUser?._id !== user?._id || !currentUser?.email) {
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
    user?._id && void identify(user._id);
  };

  const handleSignOut = async (): Promise<void> => {
    await signOut();
    await reset();
  };

  return {
    setAuth,

    signIn: async (input) => {
      const output = await query<SignInModel, { input: SignInInputModel }>({
        fields: ['token', 'isNew', { user: USER_FIELDS }],
        name: SIGN_IN,
        params: { input: SIGN_IN_INPUT },
        variables: { input },
      });
      output && (await signIn(output));
    },

    signOut: handleSignOut,

    // userUpdate: async (input = {}) => {
    //   const name = `${SIGN_IN_USER}${RESOURCE_METHOD_TYPE.UPDATE}`;
    //   const output = await query<
    //     { input: InputModel<RESOURCE_METHOD_TYPE.UPDATE, UserModel, UserFormModel> },
    //     OutputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel>
    //   >({
    //     fields: [{ result: ['token', { user: userFields }] }],
    //     name,
    //     params: { input: `${name}Input` },
    //     type: GRAPHQL_OPERATION_TYPE.MUTATION,
    //     variables: { input },
    //   });
    //   if (output?.result) {
    //     await signIn(output.result);
    //     actions?.user.currentUserUpdate(output.result.user);
    //   } else {
    //     throw new UnauthorizedError();
    //   }
    // },

    usernameUpdate: async (input) => {
      const output = await query<SignInModel, { input: SignInInputModel }>({
        fields: ['token', { user: USER_FIELDS }],
        name: USERNAME_UPDATE,
        params: { input: SIGN_IN_INPUT },
        variables: { input },
      });
      output && (await signIn(output));
    },

    verifyToken: async (input) => {
      const output = await query<SignInModel, { input: string }>({
        fields: ['token', 'isNew', { user: USER_FIELDS }],
        name: VERIFY_TOKEN,
        params: { input: 'String' },
        variables: { input },
      });
      if (output) {
        // await handleSignOut();
        await signIn(output);
        // await setAuth(output.token, output.user);
      }
    },
  };
};
