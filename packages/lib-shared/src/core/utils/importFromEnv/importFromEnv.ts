import { NotFoundError } from '#lib-shared/core/errors/NotFoundError/NotFoundError';
import type {
  ImportFromEnvModel,
  ImportFromEnvParamsModel,
} from '#lib-shared/core/utils/importFromEnv/importFromEnv.models';
import { resolveFirst } from '#lib-shared/core/utils/resolveFirst/resolveFirst';
import trim from 'lodash/trim';

import { extensions } from '#lib-platform/core/utils/extensions/extensions';

export const importFromEnv = async <TType>(
  params: ImportFromEnvParamsModel,
): ImportFromEnvModel<TType> => {
  const value: Array<string> = [];
  try {
    return await resolveFirst(
      extensions().map((ext) => async () => {
        const path = `${params}${ext ? `.${trim(ext, '.')}` : ''}`;
        try {
          const imported = await import(path);
          return imported.default ?? imported;
        } catch (e) {
          value.push(path);
          throw new Error();
        }
      }),
    );
  } catch (e) {
    throw new NotFoundError(value.join('\n'));
  }
};
