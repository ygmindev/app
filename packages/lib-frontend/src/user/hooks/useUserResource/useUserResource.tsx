import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useNotification } from '#lib-frontend/notification/hooks/useNotification/useNotification';
import { useResource } from '#lib-frontend/resource/hooks/useResource/useResource';
import { useActions } from '#lib-frontend/state/hooks/useActions/useActions';
import { USER_FIELDS } from '#lib-frontend/user/hooks/useUserResource/useUserResource.constants';
import { type UseUserResourceModel } from '#lib-frontend/user/hooks/useUserResource/useUserResource.models';
import { USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';
import { type UserFormModel, type UserModel } from '#lib-shared/user/resources/User/User.models';

export const useUserResource = (): UseUserResourceModel => {
  const { t } = useTranslation();
  const actions = useActions();
  const { success } = useNotification();
  return useResource<UserModel, UserFormModel>({
    afterUpdate: async ({ output }) => {
      if (output.result) {
        success({ message: t('core:updateSuccess') });
        actions?.user.currentUserUpdate(output.result);
      }
      return output;
    },
    fields: [{ result: USER_FIELDS }],
    name: USER_RESOURCE_NAME,
  });
};
