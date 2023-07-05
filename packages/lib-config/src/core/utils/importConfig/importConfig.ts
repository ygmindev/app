import isFunction from 'lodash/isFunction';

import { fromConfig } from '#lib-backend/file/utils/fromConfig/fromConfig';
import {
  type ImportConfigModel,
  type ImportConfigParamsModel,
} from '#lib-config/core/utils/importConfig/importConfig.models';
import { type CallableModel, type OptionalCallableModel } from '#lib-shared/core/core.models';
import { importFromEnv } from '#lib-shared/core/utils/importFromEnv/importFromEnv';
import { merge } from '#lib-shared/core/utils/merge/merge';

export const importConfig = async <TParams, TResult = undefined>(
  ...[name, overrides]: ImportConfigParamsModel<TParams>
): ImportConfigModel<TParams, TResult> => {
  const { _config, config } = await importFromEnv<{
    _config?: TResult | CallableModel<TResult, TParams>;
    config: TParams | OptionalCallableModel<TParams>;
  }>(fromConfig(name));
  let configF = isFunction(config) ? config() : config;
  if (overrides) {
    configF = merge([...overrides, configF]);
  }
  return {
    _config: _config ? (isFunction(_config) ? _config(configF) : _config) : undefined,
    config: configF,
  } as unknown as ImportConfigModel<TParams, TResult>;
};
