import { type ServerConfigModel } from '@lib/config/platform/server/server.models';

export const SERVER_CONFIG: Pick<ServerConfigModel, 'entryFile'> = {
  entryFile: 'src/index.ts',
};
