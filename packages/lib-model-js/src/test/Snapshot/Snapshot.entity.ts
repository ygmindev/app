import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { SNAPSHOT_RESOURCE_NAME } from '@lib/model/test/Snapshot/Snapshot.constants';
import { type SnapshotModel } from '@lib/model/test/Snapshot/Snapshot.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isDatabase: true, name: SNAPSHOT_RESOURCE_NAME })
export class Snapshot extends EntityResource implements SnapshotModel {
  @withField({ isArray: true, isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  images?: Array<string>;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  name!: string;
}

export default Snapshot;
