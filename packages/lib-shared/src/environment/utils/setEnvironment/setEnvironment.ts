import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import type { SetEnvironmentParamsModel } from '@lib/shared/environment/utils/setEnvironment/setEnvironment.models';
import { config } from 'dotenv';
import { existsSync, writeFileSync } from 'fs';
import forEach from 'lodash/forEach';
import map from 'lodash/map';
import reduce from 'lodash/reduce';
import toString from 'lodash/toString';

export const setEnvironment = ({
  environment = process.env.NODE_ENV || ENVIRONMENT.DEVELOPMENT,
  overrides,
  writes,
}: SetEnvironmentParamsModel = {}): Record<string, string> => {
  overrides && forEach(overrides, (v, k) => (process.env[k] = v));

  const paths = [
    fromConfig('core/environment/configs/.env.base'),
    fromConfig(`core/environment/configs/.env.${environment}`),
    fromWorking('.env'),
  ];

  const envs = paths.reduce((result, path) => {
    if (existsSync(path)) {
      const { error, parsed } = config({ path });
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
  }, {} as Record<string, string>);

  environment === 'production' &&
    writes &&
    envs &&
    writeFileSync(
      fromWorking(`.env.${environment}`),
      map(envs, (v, k) => `${k.trim()}=${toString(v).trim()}`).join('\n'),
    );

  return envs;
};