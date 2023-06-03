import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';
import { useResourceMethod } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { USER_OUTPUT_FIELDS } from '@lib/frontend/user/hooks/useUserResource/useUserResource.constants';
import type { UseUserResourceModel } from '@lib/frontend/user/hooks/useUserResource/useUserResource.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import type { UserFormModel, UserModel } from '@lib/shared/user/resources/User/User.models';

export const useUserResource = (): UseUserResourceModel => {
  const { t } = useTranslation();
  const actions = useActions();
  const { success } = useNotification();

  const { query: get } = useResourceMethod<RESOURCE_METHOD_TYPE.GET, UserModel, UserFormModel>({
    fields: USER_OUTPUT_FIELDS,
    method: RESOURCE_METHOD_TYPE.GET,
    name: USER_RESOURCE_NAME,
  });

  const { query: update } = useResourceMethod<
    RESOURCE_METHOD_TYPE.UPDATE,
    UserModel,
    UserFormModel
  >({
    after: async ({ output }) => {
      if (output.result) {
        success({ message: t('core:messages.updateSuccess') });
        actions?.user.currentUserUpdate(output.result);
      }
      return output;
    },
    fields: USER_OUTPUT_FIELDS,
    method: RESOURCE_METHOD_TYPE.UPDATE,
    name: USER_RESOURCE_NAME,
  });

  return {
    get,

    update,
  };
};
