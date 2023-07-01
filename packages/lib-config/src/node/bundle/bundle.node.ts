import { fromPackages } from '#lib-backend/file/utils/fromPackages/fromPackages';
import { _config as _babelConfig } from '#lib-config/node/babel/babel.node';
import { _bundle } from '#lib-config/node/bundle/_bundle';
import { config as configBase } from '#lib-config/node/bundle/bundle.base';
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

        envPrefix: ['SERVER_', 'DATABASE_'],

        platform: PLATFORM.NODE,

        watch: [fromPackages('lib-backend/src/**/*')],
      },

      configBase({ ...params }),
    ],
    MERGE_STRATEGY.DEEP_PREPEND,
  );

export const _config: _BundleConfigModel = ({ ...params } = {}) => _bundle(config({ ...params }));
