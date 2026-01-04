import { sleepForTransition } from '@lib/frontend/animation/utils/sleepForTransition/sleepForTransition';
import { useSession } from '@lib/frontend/auth/hooks/useSession/useSession';
import { type UseSignInResourceModel } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource.models';
import { AUTH_STATUS } from '@lib/frontend/auth/stores/authStore/authStore.constants';
import { useAppGraphql } from '@lib/frontend/data/hooks/useAppGraphql/useAppGraphql';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useTracking } from '@lib/frontend/tracking/hooks/useTracking/useTracking';
import { USER_RESOURCE_PARAMS } from '@lib/frontend/user/resources/User/User.constants';
import {
  SIGN_IN_USER_UPDATE,
  SIGN_IN_USERNAME_UPDATE,
} from '@lib/model/auth/SignIn/SignIn.constants';
import { type SignInModel } from '@lib/model/auth/SignIn/SignIn.models';
import { SIGN_IN_RESOURCE } from '@lib/model/auth/SignIn/SignInInput/SignInInput.constants';
import { type SignInInputModel } from '@lib/model/auth/SignIn/SignInInput/SignInInput.models';
import { type SignInUserUpdateModel } from '@lib/model/auth/SignIn/SignInUserUpdate/SignInUserUpdate.models';
import { type SignInUserUpdateInputModel } from '@lib/model/auth/SignIn/SignInUserUpdateInput/SignInUserUpdateInput.model';
import { type UserModel } from '@lib/model/user/User/User.models';
import { SIGN_IN, VERIFY_TOKEN } from '@lib/shared/auth/auth.constants';
import { UnauthorizedError } from '@lib/shared/auth/errors/UnauthorizedError/UnauthorizedError';
import { type PartialModel } from '@lib/shared/core/core.models';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { GRAPHQL_OPERATION_TYPE } from '@lib/shared/graphql/graphql.constants';

const USER_FIELDS = USER_RESOURCE_PARAMS.fields.map(({ fields, id }) =>
  fields ? { [id]: fields.map((v) => v.id) } : id,
);

export const useSignInResource = (): UseSignInResourceModel => {
  const [currentUser, currentUserSet] = useStore('user.currentUser');
  const { identify, reset } = useTracking();
  const { signInWithToken, signOut } = useSession();
  const [, authStatusSet] = useStore('auth.status');
  const [, authTokenSet] = useStore('auth.token');

  const { query } = useAppGraphql();

  const signIn = async (signIn?: PartialModel<SignInModel>): Promise<void> => {
    // await handleSignOut();
    if (signIn) {
      const { token, user } = signIn;
      user && currentUserSet(user);
      token && (await signInWithToken(token));
      await sleep();
    } else {
      throw new UnauthorizedError();
    }
  };

  const setAuth = async (token?: string, user?: Partial<UserModel>): Promise<void> => {
    authTokenSet({ access: token ?? undefined });
    let authStatusF: AUTH_STATUS = currentUser?._id
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
        params: { input: `${SIGN_IN_RESOURCE}Input` },
        variables: { input },
      });
      output && (await signIn(output));
    },

    signOut: handleSignOut,

    userUpdate: async (input) => {
      const name = SIGN_IN_USER_UPDATE;
      const output = await query<SignInUserUpdateModel, { input: SignInUserUpdateInputModel }>({
        fields: [{ result: USER_FIELDS, signIn: ['token', { user: USER_FIELDS }] }],
        name,
        params: { input: `${name}Input` },
        type: GRAPHQL_OPERATION_TYPE.MUTATION,
        variables: { input },
      });
      if (output) {
        await signIn(output.signIn);
        currentUserSet({ ...currentUser, ...output.result });
      } else {
        throw new UnauthorizedError();
      }
    },

    usernameUpdate: async (input) => {
      const output = await query<SignInModel, { input: SignInInputModel }>({
        fields: ['token', { user: USER_FIELDS }],
        name: SIGN_IN_USERNAME_UPDATE,
        params: { input: `${SIGN_IN_RESOURCE}Input` },
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
