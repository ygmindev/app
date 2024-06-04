import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { type DefineConfigModel } from '@lib/config/utils/defineConfig/defineConfig.models';
import {
  type ImportConfigModel,
  type ImportConfigParamsModel,
} from '@lib/config/utils/importConfig/importConfig.models';
import { type PartialDeepModel } from '@lib/shared/core/core.models';
import { importFromEnv } from '@lib/shared/core/utils/importFromEnv/importFromEnv';
import { merge } from '@lib/shared/core/utils/merge/merge';

export const importConfig = async <TParams, TResult = undefined>(
  ...[name, overrides]: ImportConfigParamsModel<TParams>
): Promise<ImportConfigModel<TParams, TResult>> => {
  const config = await importFromEnv<DefineConfigModel<TParams, TResult>>(fromConfig(name));
  let paramsF = config.params();
  overrides && (paramsF = merge([...overrides, paramsF]));
  console.warn(paramsF);
  return {
    config: config.config(paramsF as PartialDeepModel<TParams>),
    params: paramsF,
  } as ImportConfigModel<TParams, TResult>;
};
