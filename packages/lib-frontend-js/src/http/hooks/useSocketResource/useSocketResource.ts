import { type UseSocketResourceModel } from '@lib/frontend/http/hooks/useSocketResource/useSocketResource.models';
import { SOCKET_RESOURCE_PARAMS } from '@lib/frontend/http/resources/Socket/Socket.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { type SocketModel } from '@lib/shared/http/resources/Socket/Socket.models';

export const useSocketResource = (): UseSocketResourceModel =>
  useResource<SocketModel>({
    ...SOCKET_RESOURCE_PARAMS,
  });
