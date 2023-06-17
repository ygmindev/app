import { _babel } from '#lib-config/node/babel/_babel';
import { config as configBase } from '#lib-config/node/babel/babel.base';
import type { _BabelConfigModel, BabelConfigModel } from '#lib-config/node/babel/babel.models';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '#lib-shared/core/utils/merge/merge.constants';

export const config: BabelConfigModel = merge(
  [
    {
      plugins: [['transform-react-remove-prop-types', { removeImport: true }]],

      // presets: [['@babel/preset-react', { runtime: 'automatic' }]],
    },

    configBase,
  ],
  MERGE_STRATEGY.DEEP_PREPEND,
);

export const _config: _BabelConfigModel = () => _babel(config);
