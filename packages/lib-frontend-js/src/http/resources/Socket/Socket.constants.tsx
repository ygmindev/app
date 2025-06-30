import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { SOCKET_RESOURCE_NAME } from '@lib/model/http/Socket/Socket.constants';
import { type SocketModel } from '@lib/model/http/Socket/Socket.models';

export const SOCKET_RESOURCE_PARAMS = {
  fields: [],
  name: SOCKET_RESOURCE_NAME,
} satisfies ResourceParamsModel<SocketModel>;
