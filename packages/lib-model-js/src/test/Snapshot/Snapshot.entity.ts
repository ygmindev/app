import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { SNAPSHOT_RESOURCE_NAME } from '@lib/model/test/Snapshot/Snapshot.constants';
import { type SnapshotModel } from '@lib/model/test/Snapshot/Snapshot.models';

@withEntity({ isDatabase: true, name: SNAPSHOT_RESOURCE_NAME })
export class Snapshot extends EntityResource implements SnapshotModel {
  @withField({ isDatabase: true, isOptional: true })
  images?: Array<string>;

  @withField({ isDatabase: true })
  name!: string;
}

export default Snapshot;
