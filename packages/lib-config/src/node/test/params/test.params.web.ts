import type { _TestConfigParamsModel } from '@lib/config/node/test/_test.models';
import { default as testConfigParamsFrontend } from '@lib/config/node/test/params/test.params.frontend';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

const testConfigParams: _TestConfigParamsModel = merge<_TestConfigParamsModel>(
  [{}, testConfigParamsFrontend],
  MERGE_STRATEGY.DEEP_PREPEND,
);

export default testConfigParams;
