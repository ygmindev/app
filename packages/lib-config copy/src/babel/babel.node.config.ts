import type { TransformOptions } from '@babel/core';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

import { babelConfig as babelBaseConfig } from './babel.base.config';

export const babelConfig: TransformOptions = merge({
  strategy: MERGE_STRATEGY.DEEP_APPEND,
  values: [{ plugins: ['babel-plugin-transform-typescript-metadata'] }, babelBaseConfig],
});
