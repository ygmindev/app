import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { EVENT_RESOURCE_NAME } from '@lib/model/kfn/Event/Event.constants';
import { type EventModel } from '@lib/model/kfn/Event/Event.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';

@withDatabaseEntity({ name: EVENT_RESOURCE_NAME })
export class Event extends EntityResource implements EventModel {
  @withDatabaseField({ isOptional: true, type: DATA_TYPE.DATE })
  end?: DateTime;

  @withDatabaseField({ isArray: true, isOptional: true })
  images?: Array<string>;

  @withDatabaseField()
  name!: string;

  @withDatabaseField({ isOptional: true, type: DATA_TYPE.DATE })
  start?: DateTime;
}
