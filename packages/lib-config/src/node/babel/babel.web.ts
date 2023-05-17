import type { BabelConfigModel } from '@lib/config/node/babel/_babel.models';
import { default as babelConfigFrontend } from '@lib/config/node/babel/babel.frontend';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

const babelConfig: BabelConfigModel = merge(
  [
    {
      plugins: ['@emotion', 'react-native-web'],

      presets: [],
    },

    babelConfigFrontend,
  ],
  MERGE_STRATEGY.DEEP_PREPEND,
);

export default babelConfig;
