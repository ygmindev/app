import { useSession } from '@lib/frontend/auth/hooks/useSession/useSession';
import { type UseSignInResourceModel } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource.models';
import { useAppGraphql } from '@lib/frontend/data/hooks/useAppGraphql/useAppGraphql';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useTracking } from '@lib/frontend/tracking/hooks/useTracking/useTracking';
import { USER_RESOURCE_PARAMS } from '@lib/frontend/user/resources/User/User.constants';
import { SIGN_IN } from '@lib/shared/auth/auth.constants';
import { UnauthorizedError } from '@lib/shared/auth/errors/UnauthorizedError/UnauthorizedError';
import { type SignInModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import { SIGN_IN_INPUT } from '@lib/shared/auth/resources/SignIn/SignInInput/SignInInput.constants';
import { type SignInInputModel } from '@lib/shared/auth/resources/SignIn/SignInInput/SignInInput.models';
import { type PartialModel } from '@lib/shared/core/core.models';

const USER_FIELDS = USER_RESOURCE_PARAMS.fields.map(({ id }) => id);

export const useSignInResource = (): UseSignInResourceModel => {
  const [, currentUserSet] = useStore('user.currentUser');
  const { identify, reset } = useTracking();
  const { signInWithToken, signOut } = useSession();
  const { query } = useAppGraphql();

  const signIn = async (signIn?: PartialModel<SignInModel>): Promise<void> => {
    await handleSignOut();
    if (signIn) {
      const { token, user } = signIn;
      user && currentUserSet(user);
      token && (await signInWithToken(token));
      user?._id && void identify(user._id);
    } else {
      throw new UnauthorizedError();
    }
  };

  const handleSignOut = async (): Promise<void> => {
    await signOut();
    return reset();
  };

  return {
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

    // usernameUpdate: async (form) => {
    //   const { result } = await usernameUpdate({ form });
    //   await signIn(result);
    // },
  };
};
