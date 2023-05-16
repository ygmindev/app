import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { importDynamic } from '@lib/shared/core/utils/importDynamic/importDynamic';
import type {
  ImportFromEnvModel,
  ImportFromEnvParamsModel,
} from '@lib/shared/core/utils/importFromEnv/importFromEnv.models';
import { resolveFirst } from '@lib/shared/core/utils/resolveFirst/resolveFirst';
import trim from 'lodash/trim';

export const importFromEnv = async <TType>(
  ...[
    name,
    extensions = [
      `.${process.env.ENV_PLATFORM}.${process.env.NODE_ENV}`,
      `.${process.env.ENV_PLATFORM}`,
      `.${process.env.NODE_ENV}`,
      '',
    ],
  ]: ImportFromEnvParamsModel
): ImportFromEnvModel<TType> => {
  const _result: Array<string> = [];
  try {
    return await resolveFirst(
      extensions.map((ext) => async () => {
        const _path = `${name}${ext ? `.${trim(ext, '.')}` : ''}`;
        try {
          return await importDynamic(_path);
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
