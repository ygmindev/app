import {
  type UseCredentialsModel,
  type UseCredentialsParamsModel,
} from '@lib/frontend/auth/hooks/useCredentials/useCredentials.models';
import { useSession } from '@lib/frontend/auth/hooks/useSession/useSession';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { type CredentialsModel } from '@lib/shared/auth/auth.models';
import { GROUP_RESOURCE_NAME } from '@lib/model/group/Group/Group.constants';

export const useCredentials = ({}: UseCredentialsParamsModel = {}): UseCredentialsModel => {
  const [token] = useStore('auth.token.access');
  const [currentGroup] = useStore('group.currentGroup');
  const { refreshToken } = useSession();
  return {
    getCredentials: async () => {
      await refreshToken();
      const credentials: CredentialsModel = {};
      token && (credentials.Authorization = `Bearer ${token}`);
      currentGroup?._id && (credentials[GROUP_RESOURCE_NAME] = currentGroup._id);
      return credentials;
    },
  };
};
