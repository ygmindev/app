import isFunction from 'lodash/isFunction';

import { fromConfig } from '#lib-backend/file/utils/fromConfig/fromConfig';
import { type ConfigDynamicModel } from '#lib-config/core/core.models';
import {
  type ImportConfigModel,
  type ImportConfigParamsModel,
} from '#lib-config/core/utils/importConfig/importConfig.models';
import { type EmptyObjectModel, type ReturnTypeModel } from '#lib-shared/core/core.models';
import { importFromEnv } from '#lib-shared/core/utils/importFromEnv/importFromEnv';

const loadConfig = async <TType, TOptions = EmptyObjectModel>(
  params: TType | ConfigDynamicModel<TType, TOptions>,
  options?: TOptions,
): Promise<ReturnTypeModel<TType>> => {
  const result = isFunction(params) ? params(options) : params;
  return result as ReturnTypeModel<TType>;
};

export const importConfig = async <TParams, TResult = undefined, TOptions = EmptyObjectModel>(
  ...[name, options]: ImportConfigParamsModel<TOptions>
): ImportConfigModel<TParams, TResult> => {
  const { _config, config } = await importFromEnv<{ _config: TResult; config: TParams }>(
    fromConfig(name),
  );
  return {
    _config: (await loadConfig(_config, options)) as ReturnTypeModel<TResult>,
    config: (await loadConfig(config, options)) as ReturnTypeModel<TParams>,
  };
};
