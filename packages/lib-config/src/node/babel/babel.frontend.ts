import type { BabelConfigModel, _BabelConfigModel } from '@lib/config/node/babel/babel.models';
import { config as configBase } from '@lib/config/node/babel/babel.base';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { _babel } from '@lib/config/node/babel/_babel';

export const config: BabelConfigModel = merge(
  [
    {
      plugins: [['transform-react-remove-prop-types', { removeImport: true }]],

      presets: [
        // 'module:metro-react-native-babel-preset',
        ['@babel/preset-react', { runtime: 'automatic' }],
      ],
    },

    configBase,
  ],
  MERGE_STRATEGY.DEEP_PREPEND,
);

export const _config: _BabelConfigModel = () => _babel(config);
