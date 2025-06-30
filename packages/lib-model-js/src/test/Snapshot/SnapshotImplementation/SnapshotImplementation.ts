import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { children } from '@lib/backend/file/utils/children/children';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import screenConfig from '@lib/config/screen/screen';
import { SNAPSHOT_RESOURCE_NAME } from '@lib/model/test/Snapshot/Snapshot.constants';
import { type SnapshotModel } from '@lib/model/test/Snapshot/Snapshot.models';
import { type SnapshotImplementationModel } from '@lib/model/test/Snapshot/SnapshotImplementation/SnapshotImplementation.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';

@withContainer({ name: `${SNAPSHOT_RESOURCE_NAME}Implementation` })
export class SnapshotImplementation implements SnapshotImplementationModel {
  async get({
    filter,
  }: ResourceInputModel<RESOURCE_METHOD_TYPE.GET, SnapshotModel>): Promise<
    ResourceOutputModel<RESOURCE_METHOD_TYPE.GET, SnapshotModel>
  > {
    const { snapshotPath } = screenConfig.params();
    const snapshots = {
      images: [],
      name: '',
    };
    return { result: snapshots };
  }

  async getMany(
    _input: ResourceInputModel<RESOURCE_METHOD_TYPE.GET_MANY, SnapshotModel>,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_MANY, SnapshotModel>> {
    const { snapshotPath } = screenConfig.params();
    const path = fromPackages('app-web-js', snapshotPath);
    const snapshots = children(path).map(({ name }) => ({ name }));
    return { result: snapshots };
  }
}
