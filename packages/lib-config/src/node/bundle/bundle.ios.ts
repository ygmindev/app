import type { BundleConfigModel } from '@lib/config/node/bundle/_bundle.models';
import { default as bundleConfigBase } from '@lib/config/node/bundle/bundle.base';
import { default as bundleConfigFrontend } from '@lib/config/node/bundle/bundle.frontend';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

const bundleConfig: BundleConfigModel = async () => {
  const _bundleConfigBase = await bundleConfigBase();
  const _bundleConfigFrontend = await bundleConfigFrontend();
  return merge(
    [
      {
        extensions: permuteString(['.ios', '.native'], _bundleConfigBase.extensions),
  
        platform: PLATFORM.IOS,
      },
  
      _bundleConfigFrontend,
    ],
    MERGE_STRATEGY.DEEP_PREPEND,
  );
}

export default bundleConfig;
