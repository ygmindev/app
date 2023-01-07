import '@lib/config/javascript/test/_initialize.base.config';

import { initialize } from '@lib/backend/setup/utils/initialize/initialize';

beforeAll(async () => {
  await initialize();
});
