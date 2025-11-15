import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { DATABASE_CONFIG } from '@lib/config/database/database.constants';
import { SOCKET_RESOURCE_NAME } from '@lib/model/http/Socket/Socket.constants';
import { type SocketModel } from '@lib/model/http/Socket/Socket.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';

@withDatabaseEntity({ name: SOCKET_RESOURCE_NAME })
export class Socket extends EntityResource implements SocketModel {
  @withDatabaseField({ isArray: true })
  connections!: Array<string>;

  @withDatabaseField({
    Resource: () => Date,
    expire: DATABASE_CONFIG.expireSeconds,
  })
  created: Date = new Date();

  @withDatabaseField({ isOptional: true })
  name?: string;
}

export default Socket;
