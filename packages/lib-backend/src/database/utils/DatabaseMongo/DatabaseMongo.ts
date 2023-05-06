import { Database } from '@lib/backend/database/utils/Database/Database';
import type { DatabaseModel } from '@lib/backend/database/utils/Database/Database.models';
import { databaseConfigMongo } from '@lib/config/database/configs/database.config.mongo';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';

@withContainer()
export class DatabaseMongo extends Database implements DatabaseModel {
  constructor() {
    super(databaseConfigMongo);
  }
}
