import type { TransformOptions } from '@babel/core';
import { babelConfig as babelBaseConfig } from '@lib/config/babel/babel.base.config';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

export const babelConfig: TransformOptions = merge({
  strategy: MERGE_STRATEGY.DEEP_APPEND,
  values: [{ plugins: ['babel-plugin-transform-typescript-metadata'] }, babelBaseConfig],
});
