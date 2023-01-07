import '@lib/config/js/test/_initialize.base.config';

import { initialize } from '@lib/frontend/setup/utils/initialize/initialize';
import type { CallableModel } from '@lib/shared/core/core.models';

// global.__reanimatedWorkletInit = (worklet) => {
//   worklet.__worklet = true;
// };
// jest.mock('react-native-reanimated', () => jest.requireActual('react-native-reanimated/mock'));

global.requestAnimationFrame = (cb: CallableModel) => {
  cb();
  return -1;
};

beforeAll(async () => {
  await initialize();
});
