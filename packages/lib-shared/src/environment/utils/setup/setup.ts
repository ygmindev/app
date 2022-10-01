import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import type { EnvironmentModel } from '@lib/shared/environment/environment.models';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import type { SetupParamsModel } from '@lib/shared/environment/utils/setup/setup.models';
import { config } from 'dotenv';
import { writeFileSync } from 'fs';
import { forEach, map, reduce, toString } from 'lodash';

export const setup = ({
  environment = getEnv<EnvironmentModel>('NODE_ENV', ENVIRONMENT.DEVELOPMENT),
  overrides,
  writes,
}: SetupParamsModel = {}): Record<string, string> => {
  overrides && forEach(overrides, (v, k) => (process.env[k] = v));

  const envs = reduce<string, Record<string, string>>(
    ['base', environment],
    (result, value) => {
      const dotEnvPath = fromConfig(`environment/.env.${value}`);
      const { error, parsed } = config({ path: dotEnvPath });
      if (error) {
        throw new NotFoundError(dotEnvPath);
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
    },
    {},
  );

  process.env.NODE_ENV === 'production' &&
    writes &&
    envs &&
    writeFileSync(
      fromWorking(`.env.${process.env.NODE_ENV}`),
      map(envs, (v, k) => `${k.trim()}=${toString(v).trim()}`).join('\n'),
    );

  return envs;
};
