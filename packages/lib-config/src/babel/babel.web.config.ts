import type { TransformOptions } from '@babel/core';
import { babelConfig as babelBaseConfig } from '@lib/config/babel/babel.frontend.config';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

export const babelConfig: TransformOptions = merge({
  strategy: MERGE_STRATEGY.DEEP_APPEND,

  values: [{ plugins: ['react-native-web'] }, babelBaseConfig],
});
