import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import {
  type SetEnvironmentModel,
  type SetEnvironmentParamsModel,
} from '@lib/shared/environment/utils/setEnvironment/setEnvironment.models';
import { config } from 'dotenv';
import { existsSync } from 'fs';

export const setEnvironment = ({
  environment,
  variables,
}: SetEnvironmentParamsModel = {}): SetEnvironmentModel => {
  const environmentF = process.env.NODE_ENV ?? environment;

  const paths = filterNil([
    fromWorking('.env'),
    fromWorking('.env.public'),
    environmentF && fromWorking(`.env.${environmentF}`),
    fromConfig('environment/.env.base'),
    environmentF && fromConfig(`environment/.env.${environmentF}`),
  ]);

  const envs = paths.reduce((result, path) => {
    if (existsSync(path)) {
      const { error, parsed } = config({ override: true, path });
      if (error) {
        return result;
      }
      return parsed ? { ...result, ...parsed } : result;
    }
    return result;
  }, {});

  variables && (process.env = { ...process.env, ...variables() });

  return envs;
};
