import { type EntityResourceServiceModel } from '#lib-shared/resource/services/EntityResourceService/EntityResourceService.models';
import { type SnapshotModel } from '#lib-shared/test/resources/Snapshot/Snapshot.models';

export type SnapshotServiceModel = Pick<EntityResourceServiceModel<SnapshotModel>, 'getMany'>;