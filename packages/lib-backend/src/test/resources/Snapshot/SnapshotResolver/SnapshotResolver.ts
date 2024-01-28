import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { Snapshot } from '@lib/backend/test/resources/Snapshot/Snapshot';
import { SnapshotImplementation } from '@lib/backend/test/resources/Snapshot/SnapshotImplementation/SnapshotImplementation';
import { SNAPSHOT_RESOURCE_NAME } from '@lib/shared/test/resources/Snapshot/Snapshot.constants';
import { type SnapshotModel } from '@lib/shared/test/resources/Snapshot/Snapshot.models';
import { type SnapshotImplementationModel } from '@lib/shared/test/resources/Snapshot/SnapshotImplementation/SnapshotImplementation.models';

@withContainer()
@withResolver({ Resource: () => Snapshot })
export class SnapshotResolver
  extends createEntityResourceResolver<SnapshotModel>({
    Resource: () => Snapshot,
    ResourceImplementation: SnapshotImplementation,
    name: SNAPSHOT_RESOURCE_NAME,
  })
  implements SnapshotImplementationModel {}
