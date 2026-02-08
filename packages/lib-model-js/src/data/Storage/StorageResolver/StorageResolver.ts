import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { STORAGE_RESOURCE_NAME } from '@lib/model/data/Storage/Storage.constants';
import { Storage } from '@lib/model/data/Storage/Storage.entity';
import { StorageImplementation } from '@lib/model/data/Storage/StorageImplementation/StorageImplementation';
import { type StorageResolverModel } from '@lib/model/data/Storage/StorageResolver/StorageResolver.models';

@withContainer()
@withResolver({ Resource: () => Storage })
export class StorageResolver
  extends createEntityResourceResolver({
    Resource: () => Storage,
    ResourceImplementation: StorageImplementation,
    name: STORAGE_RESOURCE_NAME,
  })
  implements StorageResolverModel {}
