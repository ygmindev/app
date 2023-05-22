import { extensions } from '@lib/platform/core/utils/extensions/extensions';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import type {
  ImportFromEnvModel,
  ImportFromEnvParamsModel,
} from '@lib/shared/core/utils/importFromEnv/importFromEnv.models';
import { resolveFirst } from '@lib/shared/core/utils/resolveFirst/resolveFirst';
import trim from 'lodash/trim';

export const importFromEnv = async <TType>(
  params: ImportFromEnvParamsModel,
): ImportFromEnvModel<TType> => {
  const _result: Array<string> = [];
  try {
    return await resolveFirst(
      extensions().map((ext) => async () => {
        const _path = `${params}${ext ? `.${trim(ext, '.')}` : ''}`;
        try {
          const _module = await import(_path);
          return _module.default ?? _module;
        } catch (e) {
          _result.push(_path);
          throw new Error();
        }
      }),
    );
  } catch (e) {
    throw new NotFoundError(_result.join('\n'));
  }
};
