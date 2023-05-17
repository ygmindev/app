import type {
  ImportConfigModel,
  ImportConfigParamsModel,
} from '@lib/config/core/utils/importConfig/importConfig.models';
import type { CallablePromiseModel, ReturnTypeModel } from '@lib/shared/core/core.models';
import { importFromEnv } from '@lib/shared/core/utils/importFromEnv/importFromEnv';
import { isPromise } from '@lib/shared/core/utils/isPromise/isPromise';
import isFunction from 'lodash/isFunction';

export const importConfig = async <TType>(
  params: ImportConfigParamsModel,
): ImportConfigModel<TType> => {
  let _config = await importFromEnv(`@lib/config/${params}`);
  _config = isFunction(_config) ? _config() : _config;
  _config = isPromise(_config)? await _config : _config;
  return _config as ReturnTypeModel<TType>;
};
