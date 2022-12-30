import '@lib/config/js/test/configs/initialize.base.config';

import { initialize } from '@lib/frontend/setup/utils/initialize/initialize';

// global.__reanimatedWorkletInit = (worklet) => {
//   worklet.__worklet = true;
// };
// jest.mock('react-native-reanimated', () => jest.requireActual('react-native-reanimated/mock'));

// global.requestAnimationFrame = (cb: CallableModel) => {
//   cb();
//   return -1;
// };

beforeAll(async () => {
  await initialize();
});
