import type { TransformOptions } from '@babel/core';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

import { babelConfig as babelBaseConfig } from './babel.frontend.config';

export const babelConfig: TransformOptions = merge({
  strategy: MERGE_STRATEGY.DEEP_APPEND,

  values: [{}, babelBaseConfig],
});
