import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { _DatabaseInMemory } from '@lib/backend/database/utils/DatabaseInMemory/_DatabaseInMemory';
import { type DatabaseInMemoryModel } from '@lib/backend/database/utils/DatabaseInMemory/DatabaseInMemory.models';

@withContainer()
export class DatabaseInMemory extends _DatabaseInMemory implements DatabaseInMemoryModel {}
