import { config as bundleConfig } from '#lib-config/node/bundle/bundle.web';
import { _test } from '#lib-config/node/test/_test';
import { config as configBase } from '#lib-config/node/test/test.frontend';
import { type _TestConfigModel, type TestConfigModel } from '#lib-config/node/test/test.models';
import { merge } from '#lib-shared/core/utils/merge/merge';

export const config: TestConfigModel = ({ ...params } = {}) =>
  merge([
    {
      bundleConfig,
    },

    configBase({ ...params }),
  ]);

export const _config: _TestConfigModel = ({ ...params } = {}) => _test(config({ ...params }));
