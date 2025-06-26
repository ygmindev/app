import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';
import { type SnapshotModel } from '@lib/shared/test/resources/Snapshot/Snapshot.models';

export type SnapshotImplementationModel = Pick<
  EntityResourceImplementationModel<SnapshotModel>,
  'get' | 'getMany'
>;
