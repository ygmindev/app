import { config as bundleConfig } from '#lib-config/node/bundle/bundle.frontend';
import { _test } from '#lib-config/node/test/_test';
import { config as configBase } from '#lib-config/node/test/test.base';
import type { _TestConfigModel, TestConfigModel } from '#lib-config/node/test/test.models';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '#lib-shared/core/utils/merge/merge.constants';

export const config: TestConfigModel = () =>
  merge(
    [
      {
        bundleConfig,

        mocks: [
          ['react-native-reanimated', () => jest.requireActual('react-native-reanimated/mock')],
        ],
      },

      configBase(),
    ],
    MERGE_STRATEGY.DEEP_PREPEND,
  );

export const _config: _TestConfigModel = () => _test(config());
