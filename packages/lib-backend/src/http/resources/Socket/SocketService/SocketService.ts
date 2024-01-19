import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { Socket } from '@lib/backend/http/resources/Socket/Socket';
import { createEntityResourceService } from '@lib/backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { SOCKET_RESOURCE_NAME } from '@lib/shared/http/resources/Socket/Socket.constants';
import {
  type SocketFormModel,
  type SocketModel,
} from '@lib/shared/http/resources/Socket/Socket.models';
import { type SocketServiceModel } from '@lib/shared/http/resources/Socket/SocketService/SocketService.models';

@withContainer({ name: `${SOCKET_RESOURCE_NAME}Service` })
export class SocketService
  extends createEntityResourceService<SocketModel, SocketFormModel>({
    Resource: Socket,
    name: SOCKET_RESOURCE_NAME,
  })
  implements SocketServiceModel {}
