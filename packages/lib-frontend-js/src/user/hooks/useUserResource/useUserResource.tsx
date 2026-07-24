import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { type UseUserResourceModel } from '@lib/frontend/user/hooks/useUserResource/useUserResource.models';
import { USER_RESOURCE_PARAMS } from '@lib/frontend/user/resources/User/User.constants';
import { type UserModel } from '@lib/model/user/User/User.models';

export const useUserResource = (): UseUserResourceModel => {
  const { t } = useTranslation();
  const [, currentUserSet] = useStore('user.currentUser');
  const { success } = useNotification();
  return useResource<UserModel>({
    ...USER_RESOURCE_PARAMS,
    afterUpdate: async ({ output }) => {
      if (output.result) {
        void success({ description: t('core:updatedSuccess') });
        currentUserSet(output.result);
      }
      return output;
    },
  });
};
