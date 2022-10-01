import { Database } from '@lib/backend/database/utils/Database/Database';
import type { DatabaseModel } from '@lib/backend/database/utils/Database/Database.models';
import { databaseMainParams } from '@lib/config/database/database.main.config';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';

@withContainer()
export class DatabaseMain extends Database implements DatabaseModel {
  constructor() {
    super(databaseMainParams());
  }
}
