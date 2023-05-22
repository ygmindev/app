import type {
  ImportConfigModel,
  ImportConfigParamsModel,
} from '@lib/config/core/utils/importConfig/importConfig.models';
import type { ReturnTypeModel } from '@lib/shared/core/core.models';
import { importFromEnv } from '@lib/shared/core/utils/importFromEnv/importFromEnv';
import { isPromise } from '@lib/shared/core/utils/isPromise/isPromise';
import isFunction from 'lodash/isFunction';

const _loadConfig = async <TType>(params: unknown): Promise<ReturnTypeModel<TType>> => {
  const _result = isFunction(params) ? params() : params;
  return isPromise(_result) ? await _result : _result;
}

export const importConfig = async <TParams, TResult = undefined>(
  params: ImportConfigParamsModel,
): ImportConfigModel<TParams, TResult> => {
  const { config, _config } = await importFromEnv<{ config: TParams, _config?: TResult }>(`@lib/config/${params}`);
  return {
    config: await _loadConfig(config) as ReturnTypeModel<TParams>,
    _config: _config && await _loadConfig(_config) as ReturnTypeModel<TResult>,
  };
};
