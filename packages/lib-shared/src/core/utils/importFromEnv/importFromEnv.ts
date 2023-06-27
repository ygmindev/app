import trim from 'lodash/trim';

import { extensions } from '#lib-platform/core/utils/extensions/extensions';
import type {
  ImportFromEnvModel,
  ImportFromEnvParamsModel,
} from '#lib-shared/core/utils/importFromEnv/importFromEnv.models';
import { resolveFirst } from '#lib-shared/core/utils/resolveFirst/resolveFirst';

export const importFromEnv = async <TType>(
  params: ImportFromEnvParamsModel,
): ImportFromEnvModel<TType> =>
  resolveFirst(
    extensions().map((ext) => async () => {
      const path = `${params}${ext ? `.${trim(ext, '.')}` : ''}`;
      const result = require(path);
      return result.default ?? result;
    }),
  );
