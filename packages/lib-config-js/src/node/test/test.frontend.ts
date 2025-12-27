import { bundleConfig } from '@lib/config/node/bundle/bundle.frontend';
import { testConfig as configBase } from '@lib/config/node/test/test.base';

export const testConfig = configBase.extend(() => ({
  bundle: bundleConfig.params(),

  mocks: [
    // TODO: fix typing?
    ['react-native-reanimated', () => jest.requireActual('react-native-reanimated/mock')] as [
      string,
      () => unknown,
    ],
  ],
}));
