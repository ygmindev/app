import {
  type DefineConfigModel,
  type DefineConfigParamsModel,
} from '@lib/config/utils/defineConfig/defineConfig.models';
import { type PartialDeepModel } from '@lib/shared/core/core.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

const mergeConfigs = <TParams, TType = undefined>({
  overrides,
  params,
  strategy,
}: Pick<DefineConfigParamsModel<TParams, TType>, 'overrides' | 'params' | 'strategy'>): TParams =>
  merge([...(overrides?.() ?? []), params()], strategy);

export const defineConfig = <TParams, TType = undefined>({
  config,
  overrides,
  params,
  strategy = MERGE_STRATEGY.DEEP_PREPEND,
}: DefineConfigParamsModel<TParams, TType>): DefineConfigModel<TParams, TType> =>
  ({
    config: config
      ? (paramsF?: PartialDeepModel<TParams>) =>
          config(
            mergeConfigs<TParams, TType>({
              overrides: () => filterNil([paramsF, ...(overrides?.() ?? [])]),
              params,
              strategy,
            }),
          )
      : undefined,

    params: () => mergeConfigs({ overrides, params, strategy }),
  }) as DefineConfigModel<TParams, TType>;
