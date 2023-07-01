import { config as setupConfig } from '#lib-config/core/setup/setup.node';
import { config as bundleConfig } from '#lib-config/node/bundle/bundle.node';
import { _test } from '#lib-config/node/test/_test';
import { config as configBase } from '#lib-config/node/test/test.base';
import { type _TestConfigModel, type TestConfigModel } from '#lib-config/node/test/test.models';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '#lib-shared/core/utils/merge/merge.constants';

export const config: TestConfigModel = ({ ...params } = {}) =>
  merge(
    [
      {
        bundleConfig,

        onBeforeAll: setupConfig.onInitialize,
      },

      configBase({ ...params }),
    ],
    MERGE_STRATEGY.DEEP_PREPEND,
  );

export const _config: _TestConfigModel = ({ ...params } = {}) => _test(config({ ...params }));
