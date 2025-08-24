import { _Database } from '@lib/backend/database/utils/Database/_Database';
import { type DatabaseModel } from '@lib/backend/database/utils/Database/Database.models';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

export class Database extends _Database implements DatabaseModel {
  async close(): Promise<void> {
    if (await this.isConnected()) {
      logger.progress(`Closing connection ${this.config.clientUrl}`);
      await super.close();
    }
  }

  async connect(): Promise<void> {
    if (await this.isConnected()) {
      logger.info(`Reusing connection ${this.config.clientUrl}`);
    } else {
      logger.progress(`Connecting ${this.config.clientUrl}`);
      await super.connect();
      logger.success(`Connected to ${this.config.clientUrl}`);
    }
  }
}
