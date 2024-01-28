import { type ResourceTablePropsModel } from '@lib/frontend/resource/components/ResourceTable/ResourceTable.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { SOCKET_RESOURCE_NAME } from '@lib/shared/http/resources/Socket/Socket.constants';
import {
  type SocketFormModel,
  type SocketModel,
} from '@lib/shared/http/resources/Socket/Socket.models';

export const SOCKET_TABLE_PROPS = {
  columns: [{ id: 'name', type: DATA_TYPE.STRING }],
  name: SOCKET_RESOURCE_NAME,
} satisfies Omit<ResourceTablePropsModel<SocketModel, SocketFormModel>, 'implementation'>;
