import { useSession } from '@lib/frontend/auth/hooks/useSession/useSession';
import type { UseSignInResourceModel } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource.models';
import { useResourceMethod } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { useTracking } from '@lib/frontend/tracking/hooks/useTracking/useTracking';
import { USER_FIELDS } from '@lib/frontend/user/hooks/useUserResource/useUserResource.constants';
import { actions } from '@lib/frontend/user/stores/userStore/userStore';
import { UnauthorizedError } from '@lib/shared/auth/errors/UnauthorizedError/UnauthorizedError';
import {
  SIGN_IN_RESOURCE_NAME,
  USERNAME_UPDATE,
} from '@lib/shared/auth/resources/SignIn/SignIn.constants';
import type { SignInFormModel, SignInModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';

export const useSignInResource = (): UseSignInResourceModel => {
  const { identify, reset } = useTracking();

  const { signInWithToken, signOut } = useSession();

  const signIn = async (signIn: SignInModel): Promise<void> => {
    const { token, user } = signIn;
    token && (await signInWithToken(token));
    actions.currentUserSet(user || null);
    if (user) {
      identify(user._id);
    }
  };

  const { query: create } = useResourceMethod<
    RESOURCE_METHOD_TYPE.CREATE,
    SignInModel,
    SignInFormModel
  >({
    fields: [{ result: ['token', 'isNew', { user: USER_FIELDS }] }],
    method: RESOURCE_METHOD_TYPE.CREATE,
    name: SIGN_IN_RESOURCE_NAME,
  });

  const { query: usernameUpdate } = useResourceMethod<
    RESOURCE_METHOD_TYPE.CREATE,
    SignInModel,
    SignInFormModel
  >({
    fields: [{ result: ['token', { user: USER_FIELDS }] }],
    method: RESOURCE_METHOD_TYPE.CREATE,
    name: USERNAME_UPDATE,
  });

  return {
    signIn: async (form) => {
      const { result } = await create({ form });
      if (result) {
        await signIn(result);
      } else {
        throw new UnauthorizedError();
      }
    },

    signOut: async () => {
      await signOut();
      actions.currentUserSet(null);
      reset();
    },

    usernameUpdate: async (form) => {
      const { result } = await usernameUpdate({ form });
      if (result) {
        await signIn(result);
      } else {
        throw new UnauthorizedError();
      }
    },
  };
};
