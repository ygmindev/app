import { useSession } from '#lib-frontend/auth/hooks/useSession/useSession';
import { type UseSignInResourceModel } from '#lib-frontend/auth/hooks/useSignInResource/useSignInResource.models';
import { useAppGraphQl } from '#lib-frontend/data/hooks/useAppGraphQl/useAppGraphQl';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useNotification } from '#lib-frontend/notification/hooks/useNotification/useNotification';
import { useResourceMethod } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { useActions } from '#lib-frontend/state/hooks/useActions/useActions';
import { useTracking } from '#lib-frontend/tracking/hooks/useTracking/useTracking';
import { USER_FIELDS } from '#lib-frontend/user/hooks/useUserResource/useUserResource.constants';
import { UnauthorizedError } from '#lib-shared/auth/errors/UnauthorizedError/UnauthorizedError';
import {
  SIGN_IN_RESOURCE_NAME,
  SIGN_IN_USER,
  SIGN_IN_USERNAME,
} from '#lib-shared/auth/resources/SignIn/SignIn.constants';
import {
  type SignInFormModel,
  type SignInModel,
} from '#lib-shared/auth/resources/SignIn/SignIn.models';
import { GRAPHQL_OPERATION_TYPE } from '#lib-shared/graphql/graphql.constants';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';
import { type UserFormModel, type UserModel } from '#lib-shared/user/resources/User/User.models';

export const useSignInResource = (): UseSignInResourceModel => {
  const actions = useActions();
  const { identify, reset } = useTracking();
  const { signInWithToken, signOut } = useSession();
  const { success } = useNotification();
  const { t } = useTranslation();

  const handleUpdateSuccess = (): void => success({ message: t('core:updateSuccess') });

  const signIn = async (signIn?: SignInModel): Promise<void> => {
    if (signIn) {
      const { token, user } = signIn;
      actions?.user.currentUserSet(user ?? null);
      token && (await signInWithToken(token));
      user && void identify(user._id);
    } else {
      throw new UnauthorizedError();
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
    name: SIGN_IN_USERNAME,
  });

  const { query } = useAppGraphQl();

  return {
    signIn: async (form) => {
      const { result } = await create({ form });
      await signIn(result);
    },

    signOut: async () => {
      await signOut();
      return reset();
    },

    userUpdate: async (input) => {
      const name = `${SIGN_IN_USER}${RESOURCE_METHOD_TYPE.UPDATE}`;
      const output = await query<
        { input: InputModel<RESOURCE_METHOD_TYPE.UPDATE, UserModel, UserFormModel> },
        OutputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel>
      >({
        fields: [{ result: ['token', { user: USER_FIELDS }] }],
        name,
        params: { input: `${name}Input` },
        type: GRAPHQL_OPERATION_TYPE.MUTATION,
        variables: { input },
      });
      if (output?.result) {
        await signIn(output.result);
        handleUpdateSuccess();
      } else {
        throw new UnauthorizedError();
      }
    },

    usernameUpdate: async (form) => {
      const { result } = await usernameUpdate({ form });
      await signIn(result);
      handleUpdateSuccess();
    },
  };
};
