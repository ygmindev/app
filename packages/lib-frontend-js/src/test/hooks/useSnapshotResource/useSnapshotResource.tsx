import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { type UseSnapshotResourceModel } from '@lib/frontend/test/hooks/useSnapshotResource/useSnapshotResource.models';
import { SNAPSHOT_RESOURCE_PARAMS } from '@lib/frontend/test/resources/Snapshot/Snapshot.constants';
import { type SnapshotModel } from '@lib/model/test/Snapshot/Snapshot.models';

export const useSnapshotResource = (): UseSnapshotResourceModel =>
  useResource<SnapshotModel>({
    ...SNAPSHOT_RESOURCE_PARAMS,
  });
