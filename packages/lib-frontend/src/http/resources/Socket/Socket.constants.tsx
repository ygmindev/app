import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { SOCKET_RESOURCE_NAME } from '@lib/shared/http/resources/Socket/Socket.constants';
import { type SocketModel } from '@lib/shared/http/resources/Socket/Socket.models';

export const SOCKET_RESOURCE_PARAMS = {
  fields: [{ id: '_id' }],
  name: SOCKET_RESOURCE_NAME,
} satisfies ResourceParamsModel<SocketModel>;
