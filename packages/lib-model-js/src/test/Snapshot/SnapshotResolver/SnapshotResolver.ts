import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { Snapshot } from '@lib/model/test/Snapshot/Snapshot.entity';
import { SnapshotImplementation } from '@lib/model/test/Snapshot/SnapshotImplementation/SnapshotImplementation';
import { SNAPSHOT_RESOURCE_NAME } from '@lib/model/test/Snapshot/Snapshot.constants';
import { type SnapshotModel } from '@lib/model/test/Snapshot/Snapshot.models';
import { type SnapshotImplementationModel } from '@lib/model/test/Snapshot/SnapshotImplementation/SnapshotImplementation.models';

@withContainer()
@withResolver({ Resource: () => Snapshot })
export class SnapshotResolver
  extends createEntityResourceResolver<SnapshotModel>({
    Resource: () => Snapshot,
    ResourceImplementation: SnapshotImplementation,
    name: SNAPSHOT_RESOURCE_NAME,
  })
  implements SnapshotImplementationModel {}
