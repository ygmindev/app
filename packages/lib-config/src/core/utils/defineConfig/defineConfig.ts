// COMPLETE
import {
  type DefineConfigModel,
  type DefineConfigParamsModel,
} from '@lib/config/core/utils/defineConfig/defineConfig.models';
import { type PartialDeepModel } from '@lib/shared/core/core.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import isFunction from 'lodash/isFunction';

const getConfigs = <TParams, TParamsConfig extends TParams | (() => TParams), TResult = undefined>({
  config,
  overrides,
  strategy,
}: Pick<
  DefineConfigParamsModel<TParams, TParamsConfig, TResult>,
  'config' | 'overrides' | 'strategy'
>): TParams =>
  merge(
    [
      ...(overrides
        ? ((isFunction(overrides) ? overrides() : overrides) as Array<PartialDeepModel<TParams>>)
        : []),
      isFunction(config) ? config() : config,
    ],
    strategy,
  );

export const defineConfig = <
  TParams,
  TParamsConfig extends TParams | (() => TParams),
  TResult = undefined,
>({
  _config,
  config,
  overrides,
  strategy = MERGE_STRATEGY.DEEP_PREPEND,
}: DefineConfigParamsModel<TParams, TParamsConfig, TResult>): DefineConfigModel<
  TParams,
  TParamsConfig,
  TResult
> =>
  ({
    _config: _config
      ? isFunction(config)
        ? (params: PartialDeepModel<TParams>) =>
            _config(
              getConfigs({
                config,
                overrides: [
                  params,
                  ...(overrides ? (overrides as () => Array<PartialDeepModel<TParams>>)() : []),
                ],
                strategy,
              } as Pick<
                DefineConfigParamsModel<TParams, TParamsConfig, TResult>,
                'config' | 'overrides' | 'strategy'
              >),
            )
        : _config(getConfigs({ config, overrides, strategy }))
      : undefined,
    config: isFunction(config)
      ? () => getConfigs({ config, overrides, strategy })
      : getConfigs({ config, overrides, strategy }),
  }) as DefineConfigModel<TParams, TParamsConfig, TResult>;
