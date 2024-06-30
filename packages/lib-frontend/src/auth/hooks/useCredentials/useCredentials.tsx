import {
  type UseCredentialsModel,
  type UseCredentialsParamsModel,
} from '@lib/frontend/auth/hooks/useCredentials/useCredentials.models';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { type CredentialsModel } from '@lib/shared/auth/auth.models';
import { GROUP_RESOURCE_NAME } from '@lib/shared/group/resources/Group/Group.constants';

export const useCredentials = ({}: UseCredentialsParamsModel = {}): UseCredentialsModel => {
  const [token] = useStore('auth.token.access');
  const [currentGroup] = useStore('group.currentGroup');
  const credentials: CredentialsModel = {};
  token && (credentials.Authorization = `Bearer ${token}`);
  currentGroup?._id && (credentials[GROUP_RESOURCE_NAME] = currentGroup._id);
  return { getCredentials: async () => credentials };
};
