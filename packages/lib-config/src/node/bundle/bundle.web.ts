import { merge } from '#lib-shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '#lib-shared/core/utils/merge/merge.constants';

import { fromConfig } from '#lib-backend/file/utils/fromConfig/fromConfig';
import { fromStatic } from '#lib-backend/file/utils/fromStatic/fromStatic';
import { _config as _babelConfig } from '#lib-config/node/babel/babel.web';
import { _bundle } from '#lib-config/node/bundle/_bundle';
import { config as configFrontend } from '#lib-config/node/bundle/bundle.frontend';
import type { _BundleConfigModel, BundleConfigModel } from '#lib-config/node/bundle/bundle.models';
import { PLATFORM } from '#lib-platform/core/core.constants';

export const config: BundleConfigModel = () =>
  merge(
    [
      {
        aliases: {
          'react-native': 'react-native-web',
          ...(process.env.NODE_ENV === 'test' ? { '\\.(css|sass)$': 'identity-obj-proxy' } : {}),
        },

        babelConfig: _babelConfig,

        platform: PLATFORM.WEB,

        provide: {
          requestAnimationFrame: fromConfig('node/bundle/aliases/requestAnimationFrame/index.js'),
        },

        watch: [fromStatic('assets/**/*')],
      },

      configFrontend(),
    ],
    MERGE_STRATEGY.DEEP_PREPEND,
  );

export const _config: _BundleConfigModel = () => _bundle(config());
