import '@lib/config/javascript/test/_initialize.config.base';

import { initialize } from '@lib/frontend/setup/utils/initialize/initialize';
import type { CallableModel } from '@lib/shared/core/core.models';

global.requestAnimationFrame = (cb: CallableModel) => {
  cb();
  return -1;
};

beforeAll(async () => {
  await initialize();
});
