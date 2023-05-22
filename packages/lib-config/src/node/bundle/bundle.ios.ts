import type { BundleConfigModel } from '@lib/config/node/bundle/_bundle.models';
import { default as bundleConfigFrontend } from '@lib/config/node/bundle/bundle.frontend';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { PLATFORM } from '@lib/platform/core/core.constants';

const bundleConfig: BundleConfigModel = async () => {
  const _bundleConfigFrontend = await bundleConfigFrontend();
  return merge(
    [
      {
        platform: PLATFORM.IOS,
      },
  
      _bundleConfigFrontend,
    ],
    MERGE_STRATEGY.DEEP_PREPEND,
  );
}

export default bundleConfig;
