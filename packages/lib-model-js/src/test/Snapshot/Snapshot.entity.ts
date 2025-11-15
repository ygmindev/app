import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { SNAPSHOT_RESOURCE_NAME } from '@lib/model/test/Snapshot/Snapshot.constants';
import { type SnapshotModel } from '@lib/model/test/Snapshot/Snapshot.models';

@withDatabaseEntity({ name: SNAPSHOT_RESOURCE_NAME })
export class Snapshot extends EntityResource implements SnapshotModel {
  @withDatabaseField({ isArray: true, isOptional: true })
  images?: Array<string>;

  @withDatabaseField()
  name!: string;
}

export default Snapshot;
