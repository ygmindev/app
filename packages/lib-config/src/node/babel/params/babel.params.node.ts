import type { _BabelConfigParamsModel } from '@lib/config/node/babel/_babel.models';
import { default as babelParamsConfigBase } from '@lib/config/node/babel/params/babel.params.base';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

const babelParamsConfig: _BabelConfigParamsModel = merge(
  [
    {
      plugins: ['babel-plugin-transform-typescript-metadata'],
    },

    babelParamsConfigBase,
  ],
  MERGE_STRATEGY.DEEP_PREPEND,
);

export default babelParamsConfig;
