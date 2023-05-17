import type { BabelConfigModel } from '@lib/config/node/babel/_babel.models';
import { default as babelConfigBase } from '@lib/config/node/babel/babel.base';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

const babelConfig: BabelConfigModel = merge(
  [
    {
      plugins: ['babel-plugin-transform-typescript-metadata'],
    },

    babelConfigBase,
  ],
  MERGE_STRATEGY.DEEP_PREPEND,
);

export default babelConfig;
