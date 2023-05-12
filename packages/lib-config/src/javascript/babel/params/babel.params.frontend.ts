import type { _BabelConfigParamsModel } from '@lib/config/javascript/babel/_babel.models';
import { babelParamsConfig as babelParamsConfigFrontend } from '@lib/config/javascript/babel/params/babel.params.frontend';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

export const babelParamsConfig: _BabelConfigParamsModel = merge(
  [
    {
      plugins: [['transform-react-remove-prop-types', { removeImport: true }]],

      presets: [
        'module:metro-react-native-babel-preset',
        ['@babel/preset-react', { runtime: 'automatic' }],
      ],
    },

    babelParamsConfigFrontend,
  ],
  MERGE_STRATEGY.DEEP_PREPEND,
);
