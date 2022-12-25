import '@lib/config/node/test/configs/initialize.base';

import { initialize } from '@lib/backend/setup/utils/initialize/initialize';

beforeAll(async () => {
  await initialize();
});
