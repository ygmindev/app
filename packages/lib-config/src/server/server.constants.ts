import { type ServerConfigModel } from '@lib/config/server/server.models';

export const SERVER_CONFIG: Pick<ServerConfigModel, 'entryFile'> = {
  entryFile: 'src/index.ts',
};
