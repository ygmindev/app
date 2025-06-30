import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { Socket } from '@lib/model/http/Socket/Socket';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { SOCKET_RESOURCE_NAME } from '@lib/model/http/Socket/Socket.constants';
import { type SocketModel } from '@lib/model/http/Socket/Socket.models';
import { type SocketImplementationModel } from '@lib/model/http/Socket/SocketImplementation/SocketImplementation.models';

@withContainer({ name: `${SOCKET_RESOURCE_NAME}Implementation` })
export class SocketImplementation
  extends createEntityResourceImplementation<SocketModel>({
    Resource: Socket,
    name: SOCKET_RESOURCE_NAME,
  })
  implements SocketImplementationModel {}
