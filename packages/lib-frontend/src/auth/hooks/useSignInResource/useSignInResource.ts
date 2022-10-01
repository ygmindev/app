import { useSession } from '@lib/frontend/auth/hooks/useSession/useSession';
import type { UseSignInResourceResourceModel } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource.models';
import { useResourceMethod } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { dispatch } from '@lib/frontend/root/stores/store/store';
import { useTracking } from '@lib/frontend/tracking/hooks/useTracking/useTracking';
import { userActions } from '@lib/frontend/user/stores/reducer/reducer';
import { UnauthorizedError } from '@lib/shared/auth/errors/UnauthorizedError/UnauthorizedError';
import {
  SIGN_IN_RESOURCE_NAME,
  USERNAME_UPDATE,
} from '@lib/shared/auth/resources/SignIn/SignIn.constants';
import type { SignInFormModel, SignInModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';

export const useSignInResourceResource = (): UseSignInResourceResourceModel => {
  const { identify, reset } = useTracking();

  const { signInWithToken, signOut } = useSession();

  const remember = async (signIn: SignInModel | null): Promise<void> => {
    if (signIn) {
      const { isNew, token, user } = signIn;
      token && signInWithToken(token);
      dispatch(userActions.currentUserSet(user || null));
      if (user) {
        identify(user._id);
      }
    }
  };

  const { query: create } = useResourceMethod<
    RESOURCE_METHOD_TYPE.CREATE,
    SignInModel,
    SignInFormModel
  >({
    fields: [{ result: ['token', 'isNew', { user: ['_id'] }] }],
    method: RESOURCE_METHOD_TYPE.CREATE,
    name: SIGN_IN_RESOURCE_NAME,
  });

  const { query: usernameUpdate } = useResourceMethod<
    RESOURCE_METHOD_TYPE.CREATE,
    SignInModel,
    SignInFormModel
  >({
    fields: [{ result: ['token', { user: ['_id'] }] }],
    method: RESOURCE_METHOD_TYPE.CREATE,
    name: USERNAME_UPDATE,
  });

  return {
    create: async (input) => {
      const { result } = await create(input);
      if (result) {
        await remember(result);
        return { result };
      }
      throw new UnauthorizedError();
    },

    remember,

    signOut: async () => {
      await signOut();
      dispatch(userActions.currentUserSet(null));
      // user &&
      //   track<PartialDeep<UserModel>>({
      //     object: USER,
      //     action: SIGN_OUT,
      //     params: user,
      //   });
      reset();
    },

    usernameUpdate: async (input) => {
      const { result } = await usernameUpdate(input);
      if (result) {
        await remember(result);
        return { result };
      }
      throw new UnauthorizedError();
    },
  };
};
