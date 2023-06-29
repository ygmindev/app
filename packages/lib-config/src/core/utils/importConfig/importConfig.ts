import isFunction from 'lodash/isFunction';

import { fromConfig } from '#lib-backend/file/utils/fromConfig/fromConfig';
import {
  type ImportConfigModel,
  type ImportConfigParamsModel,
} from '#lib-config/core/utils/importConfig/importConfig.models';
import {
  type CallableModel,
  type CallablePromiseModel,
  type ReturnTypeModel,
} from '#lib-shared/core/core.models';
import { importFromEnv } from '#lib-shared/core/utils/importFromEnv/importFromEnv';

const loadConfig = async <TType>(
  params: TType | CallableModel<TType> | CallablePromiseModel<TType>,
): Promise<ReturnTypeModel<TType>> => {
  const result = isFunction(params) ? params() : params;
  return result as ReturnTypeModel<TType>;
};

export const importConfig = async <TParams, TResult = undefined>(
  params: ImportConfigParamsModel,
): ImportConfigModel<TParams, TResult> => {
  const { _config, config } = await importFromEnv<{ _config: TResult; config: TParams }>(
    fromConfig(params),
  );
  return {
    _config: (await loadConfig(_config)) as ReturnTypeModel<TResult>,
    config: (await loadConfig(config)) as ReturnTypeModel<TParams>,
  };
};
