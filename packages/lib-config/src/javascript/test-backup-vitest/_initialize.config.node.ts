import '@lib/config/javascript/test/_initialize.config.base';

import { initialize } from '@lib/backend/setup/utils/initialize/initialize';

beforeAll(async () => {
  await initialize();
});
