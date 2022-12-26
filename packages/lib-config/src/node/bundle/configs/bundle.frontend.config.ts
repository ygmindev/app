import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import type { BundleConfigParamsModel } from '@lib/config/node/bundle/bundle.models';
import { bundleConfig as bundleConfigBase } from '@lib/config/node/bundle/configs/bundle.base.config';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { EXTENSIONS_FRONTEND, TRANSPILE_GLOBS } from '@lib/shared/file/file.constants';

export const bundleConfig: BundleConfigParamsModel = merge({
  strategy: MERGE_STRATEGY.DEEP_PREPEND,

  values: [
    {
      extensions: EXTENSIONS_FRONTEND,

      externals: fromGlobs({ globs: TRANSPILE_GLOBS, root: fromRoot('node_modules') }),
    },

    bundleConfigBase,
  ],
});
