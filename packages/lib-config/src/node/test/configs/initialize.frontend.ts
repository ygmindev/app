import '@lib/config/node/test/configs/initialize.base';

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
