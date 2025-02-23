import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { DATABASE_CONFIG } from '@lib/config/database/database.constants';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { SOCKET_RESOURCE_NAME } from '@lib/shared/http/resources/Socket/Socket.constants';
import { type SocketModel } from '@lib/shared/http/resources/Socket/Socket.models';

@withEntity({ isDatabase: true, name: SOCKET_RESOURCE_NAME })
export class Socket extends EntityResource implements SocketModel {
  @withField({
    defaultValue: () => new Date(),
    expire: DATABASE_CONFIG.expireSeconds,
    isDatabase: true,
    type: DATA_TYPE.DATE,
  })
  declare created: Date;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  connections!: Array<string>;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  name?: string;
}
