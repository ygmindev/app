import {
  type DefineConfigModel,
  type DefineConfigParamsModel,
} from '@lib/config/utils/defineConfig/defineConfig.models';
import { type PartialDeepModel } from '@lib/shared/core/core.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

const getConfigs = <TParams, TType = undefined>({
  overrides,
  params,
  strategy,
}: Pick<DefineConfigParamsModel<TParams, TType>, 'overrides' | 'params' | 'strategy'>): TParams =>
  merge([...(overrides ? overrides() : []), params()], strategy);

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
            getConfigs<TParams, TType>({
              overrides: () => filterNil([paramsF, ...(overrides ? overrides() : [])]),
              params,
              strategy,
            }),
          )
      : undefined,
    params: () => getConfigs({ overrides, params, strategy }),
  }) as DefineConfigModel<TParams, TType>;
