import { extensions } from '#lib-platform/core/utils/extensions/extensions';
import {
  type ImportFromEnvModel,
  type ImportFromEnvParamsModel,
} from '#lib-shared/core/utils/importFromEnv/importFromEnv.models';
import { joinExtension } from '#lib-shared/core/utils/joinExtension/joinExtension';
import { requireInterop } from '#lib-shared/core/utils/requireInterop/requireInterop';
import { resolveFirst } from '#lib-shared/core/utils/resolveFirst/resolveFirst';

export const importFromEnv = async <TType>(
  params: ImportFromEnvParamsModel,
): Promise<ImportFromEnvModel<TType>> =>
  resolveFirst<TType>(
    extensions().map(
      (ext) => async () => requireInterop<TType>(ext ? joinExtension(params, ext) : params),
    ),
  );
