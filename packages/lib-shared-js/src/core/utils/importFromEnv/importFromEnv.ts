import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import fileConfig from '@lib/config/file/file';
import {
  type ImportFromEnvModel,
  type ImportFromEnvParamsModel,
} from '@lib/shared/core/utils/importFromEnv/importFromEnv.models';
import { requireInterop } from '@lib/shared/core/utils/requireInterop/requireInterop';
import { resolveFirst } from '@lib/shared/core/utils/resolveFirst/resolveFirst';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

export const importFromEnv = async <TType extends unknown>(
  params: ImportFromEnvParamsModel,
): Promise<ImportFromEnvModel<TType>> =>
  resolveFirst<TType>(
    fileConfig.params().extensions.map((extension) => async () => {
      const name = extension ? joinPaths([params], { extension }) : params;
      const result = requireInterop<TType>(name);
      result && logger.debug('imported', name);
      return result;
    }),
  );
