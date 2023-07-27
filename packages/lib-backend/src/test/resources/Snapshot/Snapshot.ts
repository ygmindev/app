import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { FIELD_TYPE } from '#lib-shared/form/form.constants';
import { SNAPSHOT_RESOURCE_NAME } from '#lib-shared/test/resources/Snapshot/Snapshot.constants';
import { type SnapshotModel } from '#lib-shared/test/resources/Snapshot/Snapshot.models';

@withEntity({ name: SNAPSHOT_RESOURCE_NAME })
export class Snapshot implements SnapshotModel {
  @withField({ isArray: true, type: FIELD_TYPE.STRING })
  images!: Array<string>;

  @withField({ type: FIELD_TYPE.STRING })
  name!: string;
}