import type {
  ImportConfigModel,
  ImportConfigParamsModel,
} from '#lib-config/core/utils/importConfig/importConfig.models';
import type { ReturnTypeModel } from '#lib-shared/core/core.models';
import { importFromEnv } from '#lib-shared/core/utils/importFromEnv/importFromEnv';
import { isPromise } from '#lib-shared/core/utils/isPromise/isPromise';
import isFunction from 'lodash/isFunction';

const loadConfig = async <TType>(params: unknown): Promise<ReturnTypeModel<TType>> => {
  const result = isFunction(params) ? params() : params;
  return isPromise(result) ? await result : result;
};

export const importConfig = async <TParams, TResult = undefined>(
  params: ImportConfigParamsModel,
): ImportConfigModel<TParams, TResult> => {
  const { _config, config } = await importFromEnv<{ _config: TResult; config: TParams }>(
    `#lib-config/${params}`,
  );
  return {
    _config: (await loadConfig(_config)) as ReturnTypeModel<TResult>,
    config: (await loadConfig(config)) as ReturnTypeModel<TParams>,
  };
};
