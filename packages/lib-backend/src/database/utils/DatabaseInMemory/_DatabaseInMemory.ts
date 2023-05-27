import { withContainer } from '@lib/backend/core/decorators/withContainer/withContainer';
import type { _DatabaseInMemoryModel } from '@lib/backend/database/utils/DatabaseInMemory/_DatabaseInMemory.models';
import { debug } from '@lib/shared/logging/utils/logger/logger';
import toNumber from 'lodash/toNumber';
import { MongoMemoryServer } from 'mongodb-memory-server';

@withContainer()
export class _DatabaseInMemory implements _DatabaseInMemoryModel {
  _server?: MongoMemoryServer;

  _isActive = (): boolean =>
    this._server ? ['starting', 'running'].includes(this._server.state) : false;

  start = async (): Promise<void> => {
    if (!this._isActive()) {
      debug('Starting database');
      const url = process.env.SERVER_MONGO_DATABASE_URL.replace('mongodb://', '').split(':');
      const port = toNumber(url.pop());
      const ip = url.join(':');
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
