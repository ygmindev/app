import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { Socket } from '@lib/model/http/Socket/Socket';
import { SocketImplementation } from '@lib/model/http/Socket/SocketImplementation/SocketImplementation';
import { type SocketResolverModel } from '@lib/model/http/Socket/SocketResolver/SocketResolver.models';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { SOCKET_RESOURCE_NAME } from '@lib/model/http/Socket/Socket.constants';
import { type SocketModel } from '@lib/model/http/Socket/Socket.models';

@withContainer()
@withResolver({ Resource: () => Socket })
export class SocketResolver
  extends createEntityResourceResolver<SocketModel>({
    Resource: () => Socket,
    ResourceImplementation: SocketImplementation,
    name: SOCKET_RESOURCE_NAME,
  })
  implements SocketResolverModel {}
