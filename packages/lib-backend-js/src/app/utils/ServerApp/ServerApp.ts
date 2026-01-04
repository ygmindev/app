import { App } from '@lib/backend/app/utils/App/App';
import {
  type ServerAppModel,
  type ServerAppParamsModel,
} from '@lib/backend/app/utils/ServerApp/ServerApp.models';
import { Server } from '@lib/backend/server/utils/Server/Server';
import { type ServerModel } from '@lib/backend/server/utils/Server/Server.models';
import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { type DatabaseConfigModel } from '@lib/config/database/database.models';
import { type ServerConfigModel } from '@lib/config/node/server/server.models';

export class ServerApp extends App implements ServerAppModel {
  databaseConfig: () => DatabaseConfigModel;
  server?: ServerModel;
  serverConfig: () => ServerConfigModel;

  constructor({ database, name, server }: ServerAppParamsModel) {
    super({ name });
    this.databaseConfig = database;
    this.serverConfig = server;
  }

  async cleanUp(): Promise<void> {
    await this.server?.cleanUp?.();
  }

  async initialize(): Promise<void> {
    await initialize({ database: () => this.databaseConfig() });
    this.server = new Server(this.serverConfig());
  }

  async run(): Promise<void> {
    await this.initialize();
    await this.server?.run();
  }
}
