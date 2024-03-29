import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { extensions } from '@lib/platform/core/utils/extensions/extensions';
import {
  type ImportFromEnvModel,
  type ImportFromEnvParamsModel,
} from '@lib/shared/core/utils/importFromEnv/importFromEnv.models';
import { requireInterop } from '@lib/shared/core/utils/requireInterop/requireInterop';
import { resolveFirst } from '@lib/shared/core/utils/resolveFirst/resolveFirst';
import { debug } from '@lib/shared/logging/utils/logger/logger';

export const importFromEnv = async <TType>(
  params: ImportFromEnvParamsModel,
): Promise<ImportFromEnvModel<TType>> =>
  resolveFirst<TType>(
    extensions().map((extension) => async () => {
      const name = extension ? joinPaths([params], { extension }) : params;
      const result = requireInterop<TType>(name);
      result && debug('imported', name);
      return result;
    }),
  );
