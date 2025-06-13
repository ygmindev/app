import { _Database } from '@lib/backend/database/utils/Database/_Database';
import { type DatabaseModel } from '@lib/backend/database/utils/Database/Database.models';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

export class Database extends _Database implements DatabaseModel {
  async connect(): Promise<void> {
    if (await this.isConnected()) {
      logger.info('reusing connection', this.config.clientUrl);
    } else {
      logger.info('connecting', this.config.clientUrl);
      await super.connect();
    }
  }

  async close(): Promise<void> {
    if (await this.isConnected()) {
      logger.info('closing connections', this.config.clientUrl);
      await super.close();
    }
  }
}
