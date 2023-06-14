import { config as bundleConfig } from '#lib-config/node/bundle/bundle.web';
import { _test } from '#lib-config/node/test/_test';
import { config as configFrontend } from '#lib-config/node/test/test.frontend';
import type { _TestConfigModel, TestConfigModel } from '#lib-config/node/test/test.models';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '#lib-shared/core/utils/merge/merge.constants';

export const config: TestConfigModel = () =>
  merge(
    [
      {
        bundleConfig,
      },
      configFrontend(),
    ],
    MERGE_STRATEGY.DEEP_PREPEND,
  );

export const _config: _TestConfigModel = () => _test(config());
