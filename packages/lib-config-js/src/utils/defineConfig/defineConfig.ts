import {
  type DefineConfigModel,
  type DefineConfigParamsModel,
} from '@lib/config/utils/defineConfig/defineConfig.models';
import { type PartialDeepModel } from '@lib/shared/core/core.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

export const defineConfig = <TParams, TType = undefined>(
  ...[
    { config, params, strategy = MERGE_STRATEGY.DEEP_PREPEND },
    ...overrides
  ]: DefineConfigParamsModel<TParams, TType>
): DefineConfigModel<TParams, TType> => {
  const getParams = (v?: PartialDeepModel<TParams>): TParams =>
    merge(filterNil([v, ...(overrides?.map((v) => v()) ?? []), params()]), strategy);

  return {
    config: config ? (v) => config(getParams(v)) : undefined,

    params: getParams,
  } as DefineConfigModel<TParams, TType>;
};
