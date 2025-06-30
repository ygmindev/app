import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { SNAPSHOT_RESOURCE_NAME } from '@lib/model/test/Snapshot/Snapshot.constants';
import { type SnapshotModel } from '@lib/model/test/Snapshot/Snapshot.models';

export const SNAPSHOT_RESOURCE_PARAMS = {
  fields: [{ id: 'name' }, { id: 'images' }],
  name: SNAPSHOT_RESOURCE_NAME,
} satisfies ResourceParamsModel<SnapshotModel>;
