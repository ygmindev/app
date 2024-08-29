import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import {
  type SetEnvironmentModel,
  type SetEnvironmentParamsModel,
} from '@lib/shared/environment/utils/setEnvironment/setEnvironment.models';
import { config } from 'dotenv';
import { existsSync } from 'fs';
import map from 'lodash/map';
import reduce from 'lodash/reduce';
import toString from 'lodash/toString';

export const setEnvironment = ({
  environment,
  variables,
  writes,
}: SetEnvironmentParamsModel = {}): SetEnvironmentModel => {
  const environmentF = process.env.NODE_ENV ?? environment;
  const paths = filterNil([
    fromConfig('environment/.env.base'),
    environmentF && fromConfig(`environment/.env.${environmentF}`),
    fromWorking('.env'),
  ]);
  const envs = paths.reduce((result, path) => {
    if (existsSync(path)) {
      const { error, parsed } = config({ override: true, path });
      if (error) {
        throw new NotFoundError(path);
      }
      return parsed
        ? {
            ...result,
            ...reduce(
              parsed,
              (newResult, v, k) =>
                !writes || writes.some((write) => write.test(k))
                  ? { ...newResult, [k]: v }
                  : newResult,
              {},
            ),
          }
        : result;
    }
    return result;
  }, {});

  variables && (process.env = { ...process.env, ...variables() });

  environmentF === 'production' &&
    writes &&
    envs &&
    writeFile({
      filename: fromWorking(`.env.${environmentF}`),
      value: map(envs, (v, k) => `${k.trim()}=${toString(v).trim()}`).join('\n'),
    });

  return envs;
};
