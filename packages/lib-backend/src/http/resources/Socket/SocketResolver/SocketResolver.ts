import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { Socket } from '@lib/backend/http/resources/Socket/Socket';
import { SocketImplementation } from '@lib/backend/http/resources/Socket/SocketImplementation/SocketImplementation';
import { type SocketResolverModel } from '@lib/backend/http/resources/Socket/SocketResolver/SocketResolver.models';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { SOCKET_RESOURCE_NAME } from '@lib/shared/http/resources/Socket/Socket.constants';
import {
  type SocketFormModel,
  type SocketModel,
} from '@lib/shared/http/resources/Socket/Socket.models';

@withContainer()
@withResolver({ Resource: () => Socket })
export class SocketResolver
  extends createEntityResourceResolver<SocketModel, SocketFormModel>({
    Resource: () => Socket,
    ResourceImplementation: SocketImplementation,
    name: SOCKET_RESOURCE_NAME,
  })
  implements SocketResolverModel {}
