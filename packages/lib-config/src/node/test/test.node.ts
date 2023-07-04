import { config as setupConfig } from '#lib-config/core/setup/setup.node';
import { config as bundleConfig } from '#lib-config/node/bundle/bundle.node';
import { _test } from '#lib-config/node/test/_test';
import { config as configBase } from '#lib-config/node/test/test.base';
import { type _TestConfigModel, type TestConfigModel } from '#lib-config/node/test/test.models';
import { merge } from '#lib-shared/core/utils/merge/merge';

export const config: TestConfigModel = ({ ...params } = {}) =>
  merge([
    {
      bundleConfig,

      onBeforeAll: setupConfig.onInitialize,
    },

    configBase({ ...params }),
  ]);

export const _config: _TestConfigModel = ({ ...params } = {}) => _test(config({ ...params }));
