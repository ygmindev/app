import toNumber from 'lodash/toNumber';
import { MongoMemoryServer } from 'mongodb-memory-server';

import { type _DatabaseInMemoryModel } from '@lib/backend/database/utils/DatabaseInMemory/_DatabaseInMemory.models';
import { debug } from '@lib/shared/logging/utils/logger/logger';

export class _DatabaseInMemory implements _DatabaseInMemoryModel {
  _server?: MongoMemoryServer;

  _isActive = (): boolean =>
    this._server ? ['starting', 'running'].includes(this._server.state) : false;

  start = async (): Promise<void> => {
    if (!this._isActive()) {
      debug('starting database');
      const url = process.env.SERVER_DB_MONGO_URL.replace('mongodb://', '').split(':');
      const port = toNumber(url.pop());
      const ip = url.join(':');
      this._server = await MongoMemoryServer.create({ instance: { ip, port } });
    }
  };

  stop = async (): Promise<void> => {
    if (this._isActive()) {
      debug('stopping database');
      try {
        this._server && (await this._server.stop());
      } catch (e) {
        debug('not stopping database');
      }
    }
  };
}
