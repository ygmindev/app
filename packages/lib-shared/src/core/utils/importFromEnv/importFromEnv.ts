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
      '',
      `.${process.env.NODE_ENV}`,
      `.${process.env.ENV_PLATFORM}.${process.env.NODE_ENV}`,
    ],
  ]: ImportFromEnvParamsModel
): ImportFromEnvModel<TType> =>
  resolveFirst(
    extensions.map((ext) => async () => await import(`${name}${ext ? trim(ext, '.') : ''}`)),
  );
