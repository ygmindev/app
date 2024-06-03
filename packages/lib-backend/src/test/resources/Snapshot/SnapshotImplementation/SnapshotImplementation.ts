import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { children } from '@lib/backend/file/utils/children/children';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import screenConfig from '@lib/config/screen/screen';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import { SNAPSHOT_RESOURCE_NAME } from '@lib/shared/test/resources/Snapshot/Snapshot.constants';
import { type SnapshotModel } from '@lib/shared/test/resources/Snapshot/Snapshot.models';
import { type SnapshotImplementationModel } from '@lib/shared/test/resources/Snapshot/SnapshotImplementation/SnapshotImplementation.models';

@withContainer({ name: `${SNAPSHOT_RESOURCE_NAME}Implementation` })
export class SnapshotImplementation implements SnapshotImplementationModel {
  async get({
    filter,
  }: InputModel<RESOURCE_METHOD_TYPE.GET, SnapshotModel>): Promise<
    OutputModel<RESOURCE_METHOD_TYPE.GET, SnapshotModel>
  > {
    const { snapshotPath } = screenConfig.params();
    const snapshots = {
      images: [],
      name: '',
    };
    return { result: snapshots };
  }

  async getMany(
    _input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, SnapshotModel>,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, SnapshotModel>> {
    const { snapshotPath } = screenConfig.params();
    const path = fromPackages('app-web', snapshotPath);
    const snapshots = children(path).map(({ name }) => ({ name }));
    return { result: snapshots };
  }
}

// import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
// import { children } from '@lib/backend/file/utils/children/children';
// import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
// import screenConfig from '@lib/config/screen/screen';
// import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
// import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
// import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
// import { SNAPSHOT_RESOURCE_NAME } from '@lib/shared/test/resources/Snapshot/Snapshot.constants';
// import { type SnapshotModel } from '@lib/shared/test/resources/Snapshot/Snapshot.models';
// import { type SnapshotImplementationModel } from '@lib/shared/test/resources/Snapshot/SnapshotImplementation/SnapshotImplementation.models';

// @withContainer({ name: `${SNAPSHOT_RESOURCE_NAME}Implementation` })
// export class SnapshotImplementation implements SnapshotImplementationModel {
//   async get({
//     filter,
//   }: InputModel<RESOURCE_METHOD_TYPE.GET, SnapshotModel>): Promise<
//     OutputModel<RESOURCE_METHOD_TYPE.GET, SnapshotModel>
//   > {
//     const { snapshotPath } = screenConfig.params();
//     const nameF = filter.name as string;
//     const path = fromPackages('app-web', snapshotPath, nameF);
//     const snapshots = {
//       images: children(path).map((child) => child.name),
//       name: nameF,
//     };
//     return { result: snapshots };
//   }

//   async getMany(
//     _input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, SnapshotModel>,
//   ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, SnapshotModel>> {
//     const { snapshotPath } = screenConfig.params();
//     const path = fromPackages('app-web', snapshotPath);
//     const snapshots = children(path).map(({ name }) => ({ name }));
//     return { result: snapshots };
//   }
// }
