import '@lib/config/node/test/configs/initialize.base.config';

import { initialize } from '@lib/backend/setup/utils/initialize/initialize';

beforeAll(async () => {
  await initialize();
});
