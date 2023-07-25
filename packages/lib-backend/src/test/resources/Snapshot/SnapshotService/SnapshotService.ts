import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { type RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';
import { SNAPSHOT_RESOURCE_NAME } from '#lib-shared/test/resources/Snapshot/Snapshot.constants';
import { type SnapshotModel } from '#lib-shared/test/resources/Snapshot/Snapshot.models';
import { type SnapshotServiceModel } from '#lib-shared/test/resources/Snapshot/SnapshotService/SnapshotService.models';

@withContainer({ name: `${SNAPSHOT_RESOURCE_NAME}Service` })
export class SnapshotService implements SnapshotServiceModel {
  async getMany(
    input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, SnapshotModel, SnapshotFormModel>,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, SnapshotModel>> {
    return { result: [] };
  }
}
