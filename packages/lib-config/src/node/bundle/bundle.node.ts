import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import type { BundleConfigModel } from '@lib/config/node/bundle/_bundle.models';
import { default as bundleConfigBase } from '@lib/config/node/bundle/bundle.base';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { PLATFORM } from '@lib/platform/core/core.constants';

const bundleConfig: BundleConfigModel = async () => {
  const _bundleConfigBase = await bundleConfigBase();
  return merge(
    [
      {
        envPrefix: ['SERVER_'],

        platform: PLATFORM.NODE,

        watch: [fromPackages('lib-backend/src/**/*')],
      },

      _bundleConfigBase,
    ],
    MERGE_STRATEGY.DEEP_PREPEND,
  );
};

export default bundleConfig;
