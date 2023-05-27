import type { BabelConfigModel, _BabelConfigModel } from '@lib/config/node/babel/babel.models';
import { config as configFrontend } from '@lib/config/node/babel/babel.frontend';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { _babel } from '@lib/config/node/babel/_babel';

export const config: BabelConfigModel = merge(
  [
    {
      plugins: ['@emotion', 'react-native-web'],

      presets: [],
    },

    configFrontend,
  ],
  MERGE_STRATEGY.DEEP_PREPEND,
);

export const _config: _BabelConfigModel = () => _babel(config);
