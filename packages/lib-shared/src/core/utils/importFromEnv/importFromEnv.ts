import trim from 'lodash/trim';

import { extensions } from '#lib-platform/core/utils/extensions/extensions';
import {
  type ImportFromEnvModel,
  type ImportFromEnvParamsModel,
} from '#lib-shared/core/utils/importFromEnv/importFromEnv.models';
import { requireInterop } from '#lib-shared/core/utils/requireInterop/requireInterop';
import { resolveFirst } from '#lib-shared/core/utils/resolveFirst/resolveFirst';

export const importFromEnv = async <TType>(
  params: ImportFromEnvParamsModel,
): ImportFromEnvModel<TType> =>
  resolveFirst<TType>(
    extensions().map((ext) => async () => {
      const path = `${params}${ext ? `.${trim(ext, '.')}` : ''}`;
      return requireInterop<TType>(path);
    }),
  );
