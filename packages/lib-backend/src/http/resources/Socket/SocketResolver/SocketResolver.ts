import { withContainer } from '@lib-backend/core/utils/withContainer/withContainer';
import { Socket } from '@lib-backend/http/resources/Socket/Socket';
import { type SocketResolverModel } from '@lib-backend/http/resources/Socket/SocketResolver/SocketResolver.models';
import { SocketService } from '@lib-backend/http/resources/Socket/SocketService/SocketService';
import { withResolver } from '@lib-backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib-backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { SOCKET_RESOURCE_NAME } from '@lib-shared/http/resources/Socket/Socket.constants';
import {
  type SocketFormModel,
  type SocketModel,
} from '@lib-shared/http/resources/Socket/Socket.models';

@withContainer()
@withResolver({ Resource: () => Socket })
export class SocketResolver
  extends createEntityResourceResolver<SocketModel, SocketFormModel>({
    Resource: () => Socket,
    ResourceService: SocketService,
    name: SOCKET_RESOURCE_NAME,
  })
  implements SocketResolverModel {}
