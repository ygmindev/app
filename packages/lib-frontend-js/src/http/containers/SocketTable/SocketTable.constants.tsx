import { type ResourceTablePropsModel } from '@lib/frontend/resource/components/ResourceTable/ResourceTable.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { SOCKET_RESOURCE_NAME } from '@lib/model/http/Socket/Socket.constants';
import { type SocketModel } from '@lib/model/http/Socket/Socket.models';

export const SOCKET_TABLE_PROPS = {
  fields: [{ id: 'name', type: DATA_TYPE.STRING }],
  name: SOCKET_RESOURCE_NAME,
} satisfies Omit<ResourceTablePropsModel<SocketModel>, 'implementation'>;
