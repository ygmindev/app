import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { debug } from '@lib/shared/logging/utils/logger/logger';
import { includes, toNumber } from 'lodash';
import { MongoMemoryServer } from 'mongodb-memory-server';

@withContainer()
export class DatabaseInMemory {
  _server?: MongoMemoryServer;

  _isActive = (): boolean =>
    this._server ? includes(['starting', 'running'], this._server.state) : false;

  start = async (): Promise<void> => {
    if (!this._isActive()) {
      debug('Starting database');
      const MONGO_DATABASE_URL = getEnv('MONGO_DATABASE_URL').replace('mongodb://', '').split(':');
      const port = toNumber(MONGO_DATABASE_URL.pop());
      const ip = MONGO_DATABASE_URL.join(':');
      this._server = await MongoMemoryServer.create({ instance: { ip, port } });
    }
  };

  stop = async (): Promise<void> => {
    if (this._isActive()) {
      debug('Stopping database');
      try {
        this._server && (await this._server.stop());
      } catch (e) {
        debug('Not stopping database');
      }
    }
  };
}
