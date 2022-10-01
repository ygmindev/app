import type { PluginItem, TransformOptions } from '@babel/core';
import { babelConfig as babelBaseConfig } from '@lib/config/babel/babel.base.config';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

export const babelConfig: TransformOptions = merge({
  strategy: MERGE_STRATEGY.DEEP_APPEND,
  values: [
    {
      plugins: [
        process.env.NODE_ENV === 'development' && [
          require.resolve('react-refresh/babel'),
          { skipEnvCheck: true },
        ],
      ].filter(Boolean) as unknown as Array<PluginItem>,

      presets: [
        'module:metro-react-native-babel-preset',
        ['@babel/preset-react', { runtime: 'automatic' }],
      ],
    },

    babelBaseConfig,
  ],
});
