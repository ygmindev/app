import toNumber from 'lodash/toNumber';

import { useSession } from '#lib-frontend/auth/hooks/useSession/useSession';
import {
  type UseApiModel,
  type UseApiParamsModel,
} from '#lib-frontend/http/hooks/useApi/useApi.models';
import { useHttp } from '#lib-frontend/http/hooks/useHttp/useHttp';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { GROUP_RESOURCE_NAME } from '#lib-shared/group/resources/Group/Group.constants';

export const useApi = ({
  host,
  isCredentials = true,
  onRequest,
  onResponse,
  pathname,
  port,
}: UseApiParamsModel): UseApiModel => {
  const { getToken } = useSession();
  const currentGroup = useStore((state) => state.group.currentGroup);
  return useHttp({
    baseUri: { host: host ?? '', pathname, port: port ? toNumber(port) : undefined },
    onRequest: async (config) => {
      if (isCredentials) {
        const token = await getToken();
        token &&
          (config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`,
            [GROUP_RESOURCE_NAME]: currentGroup?._id,
          });
      }
      return onRequest ? onRequest(config) : config;
    },
    onResponse,
  });
};
