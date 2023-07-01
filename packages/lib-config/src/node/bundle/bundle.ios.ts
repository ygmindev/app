import { _config as _babelConfig } from '#lib-config/node/babel/babel.frontend';
import { _bundle } from '#lib-config/node/bundle/_bundle';
import { config as configFrontend } from '#lib-config/node/bundle/bundle.frontend';
import {
  type _BundleConfigModel,
  type BundleConfigModel,
} from '#lib-config/node/bundle/bundle.models';
import { PLATFORM } from '#lib-platform/core/core.constants';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '#lib-shared/core/utils/merge/merge.constants';

export const config: BundleConfigModel = ({ ...params } = {}) =>
  merge(
    [
      {
        babelConfig: _babelConfig,

        platform: PLATFORM.IOS,
      },

      configFrontend({ ...params }),
    ],
    MERGE_STRATEGY.DEEP_PREPEND,
  );

export const _config: _BundleConfigModel = ({ ...params } = {}) => _bundle(config({ ...params }));
