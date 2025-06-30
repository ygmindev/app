import { type EntityResourceImplementationModel } from '@lib/model/resource/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';
import { type SnapshotModel } from '@lib/model/test/Snapshot/Snapshot.models';

export type SnapshotImplementationModel = Pick<
  EntityResourceImplementationModel<SnapshotModel>,
  'get' | 'getMany'
>;
