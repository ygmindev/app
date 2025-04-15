import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { Socket } from '@lib/backend/http/resources/Socket/Socket';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { SOCKET_RESOURCE_NAME } from '@lib/shared/http/resources/Socket/Socket.constants';
import { type SocketModel } from '@lib/shared/http/resources/Socket/Socket.models';
import { type SocketImplementationModel } from '@lib/shared/http/resources/Socket/SocketImplementation/SocketImplementation.models';

@withContainer({ name: `${SOCKET_RESOURCE_NAME}Implementation` })
export class SocketImplementation
  extends createEntityResourceImplementation<SocketModel>({
    Resource: Socket,
    name: SOCKET_RESOURCE_NAME,
  })
  implements SocketImplementationModel {}
