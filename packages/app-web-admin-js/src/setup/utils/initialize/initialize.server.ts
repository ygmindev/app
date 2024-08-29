import 'setimmediate';
import 'raf/polyfill.js';

import { type InitializeModel } from '@app/web/setup/utils/initialize/initialize.models.server';

export const initialize = async (): Promise<InitializeModel> => {
  return {};
};

// import 'setimmediate';
// import 'raf/polyfill.js';

// import { type InitializeModel } from '@app/web/setup/utils/initialize/initialize.models.server';
// import { initialize as initializeBackend } from '@lib/backend/setup/utils/initialize/initialize';

// export const initialize = async (): Promise<InitializeModel> => {
//   const { database } = await initializeBackend();
//   return { database };
// };
