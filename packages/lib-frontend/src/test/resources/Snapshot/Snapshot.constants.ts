import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { SNAPSHOT_RESOURCE_NAME } from '@lib/shared/test/resources/Snapshot/Snapshot.constants';
import { type SnapshotModel } from '@lib/shared/test/resources/Snapshot/Snapshot.models';

export const SNAPSHOT_RESOURCE_PARAMS = {
  fields: [{ id: 'name' }, { id: 'images' }],
  name: SNAPSHOT_RESOURCE_NAME,
} satisfies ResourceParamsModel<SnapshotModel>;
