import 'setimmediate';
import 'source-map-support';
import 'raf/polyfill.js';

import { type InitializeModel } from '@app/web/setup/utils/initialize/initialize.models.server';
import { initialize as initializeBackend } from '@lib/backend/setup/utils/initialize/initialize';
import databaseConfig from '@lib/config/database/database.mongo';

export const initialize = async (): Promise<InitializeModel> => {
  const result = await initializeBackend({ database: databaseConfig.params() });
  return result;
};
