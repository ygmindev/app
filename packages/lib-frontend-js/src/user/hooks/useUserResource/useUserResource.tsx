import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { type UseUserResourceModel } from '@lib/frontend/user/hooks/useUserResource/useUserResource.models';
import { USER_RESOURCE_PARAMS } from '@lib/frontend/user/resources/User/User.constants';
import { type UserModel } from '@lib/model/user/User/User.models';

export const useUserResource = (): UseUserResourceModel => {
  const { t } = useTranslation();
  const actions = useActions();
  const { success } = useNotification();
  return useResource<UserModel>({
    ...USER_RESOURCE_PARAMS,
    afterUpdate: async ({ output }) => {
      if (output.result) {
        void success({ description: t('core:updatedSuccess') });
        actions?.user.currentUser.set(output.result);
      }
      return output;
    },
  });
};
