import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '#lib-backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { Snapshot } from '#lib-backend/test/resources/Snapshot/Snapshot';
import { SnapshotService } from '#lib-backend/test/resources/Snapshot/SnapshotService/SnapshotService';
import { SNAPSHOT_RESOURCE_NAME } from '#lib-shared/test/resources/Snapshot/Snapshot.constants';
import { type SnapshotModel } from '#lib-shared/test/resources/Snapshot/Snapshot.models';
import { type SnapshotServiceModel } from '#lib-shared/test/resources/Snapshot/SnapshotService/SnapshotService.models';

@withContainer()
@withResolver({ Resource: () => Snapshot })
export class SnapshotResolver
  extends createEntityResourceResolver<SnapshotModel>({
    Resource: () => Snapshot,
    ResourceService: SnapshotService,
    name: SNAPSHOT_RESOURCE_NAME,
  })
  implements SnapshotServiceModel {}
