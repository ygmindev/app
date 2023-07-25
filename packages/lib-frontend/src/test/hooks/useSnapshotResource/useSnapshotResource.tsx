import { useResourceMethod } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { SNAPSHOT_FIELDS } from '#lib-frontend/test/hooks/useSnapshotResource/useSnapshotResource.constants';
import { type UseSnapshotResourceModel } from '#lib-frontend/test/hooks/useSnapshotResource/useSnapshotResource.models';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { SNAPSHOT_RESOURCE_NAME } from '#lib-shared/test/resources/Snapshot/Snapshot.constants';
import { type SnapshotModel } from '#lib-shared/test/resources/Snapshot/Snapshot.models';

export const useSnapshotResource = (): UseSnapshotResourceModel => {
  const { query: getMany } = useResourceMethod<RESOURCE_METHOD_TYPE.GET_MANY, SnapshotModel>({
    fields: [{ result: SNAPSHOT_FIELDS }],
    method: RESOURCE_METHOD_TYPE.GET_MANY,
    name: SNAPSHOT_RESOURCE_NAME,
  });
  return { getMany };
};
