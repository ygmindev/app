import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { debug } from '@lib/shared/logging/utils/logger/logger';
import toNumber from 'lodash/toNumber';
import { MongoMemoryServer } from 'mongodb-memory-server';

@withContainer()
export class DatabaseInMemory {
  _server?: MongoMemoryServer;

  _isActive = (): boolean =>
    this._server ? ['starting', 'running'].includes(this._server.state) : false;

  start = async (): Promise<void> => {
    const x = await MongoMemoryServer.create();
    console.warn(`@@@ ${x.getUri()}`);
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
