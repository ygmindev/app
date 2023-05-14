import type { _TestConfigParamsModel } from '@lib/config/node/test/_test.models';
import { testConfigParams as testConfigParamsFrontend } from '@lib/config/node/test/params/test.params.frontend';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

export const testConfigParams: _TestConfigParamsModel = merge(
  [{}, testConfigParamsFrontend],
  MERGE_STRATEGY.DEEP_PREPEND,
);
