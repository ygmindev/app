import type { _BabelConfigParamsModel } from '@lib/config/javascript/babel/_babel.models';
import { babelParamsConfig as babelParamsConfigBase } from '@lib/config/javascript/babel/params/babel.params.base';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

export const babelParamsConfig: _BabelConfigParamsModel = merge(
  [
    {
      plugins: ['@emotion', 'react-native-web'],

      presets: [],
    },

    babelParamsConfigBase,
  ],
  MERGE_STRATEGY.DEEP_PREPEND,
);
