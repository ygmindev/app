import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { SNAPSHOT_RESOURCE_NAME } from '@lib/shared/test/resources/Snapshot/Snapshot.constants';
import { type SnapshotModel } from '@lib/shared/test/resources/Snapshot/Snapshot.models';

@withEntity({ name: SNAPSHOT_RESOURCE_NAME })
export class Snapshot implements SnapshotModel {
  @withField({ isArray: true, isOptional: true, type: DATA_TYPE.STRING })
  images?: Array<string>;

  @withField({ type: DATA_TYPE.STRING })
  name!: string;
}
