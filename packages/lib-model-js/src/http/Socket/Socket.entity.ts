import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { DATABASE_CONFIG } from '@lib/config/database/database.constants';
import { SOCKET_RESOURCE_NAME } from '@lib/model/http/Socket/Socket.constants';
import { type SocketModel } from '@lib/model/http/Socket/Socket.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isDatabase: true, name: SOCKET_RESOURCE_NAME })
export class Socket extends EntityResource implements SocketModel {
  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  connections!: Array<string>;

  @withField({
    Resource: () => Date,
    defaultValue: () => new Date(),
    expire: DATABASE_CONFIG.expireSeconds,
    isDatabase: true,
  })
  created!: Date;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  name?: string;
}

export default Socket;
