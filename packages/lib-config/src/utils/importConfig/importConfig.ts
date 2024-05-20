import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import {
  type ImportConfigModel,
  type ImportConfigParamsModel,
} from '@lib/config/utils/importConfig/importConfig.models';
import { importFromEnv } from '@lib/shared/core/utils/importFromEnv/importFromEnv';
import { merge } from '@lib/shared/core/utils/merge/merge';
import isFunction from 'lodash/isFunction';

export const importConfig = async <TParams, TResult = undefined>(
  ...[name, overrides]: ImportConfigParamsModel<TParams>
): Promise<ImportConfigModel<TParams, TResult>> => {
  const { _config, config } = await importFromEnv<{
    _config?: TResult | ((params: TParams) => TResult);
    config: TParams | (() => TParams);
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
