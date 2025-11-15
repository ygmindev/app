import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import {
  EnvironmentModel,
  EnvironmentParamsModel,
} from '@lib/backend/environment/utils/Environment/Environment.models';
import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { EnvironmentConfigModel } from '@lib/config/environment/environment.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { config } from 'dotenv';
import { existsSync } from 'fs';

@withContainer()
export class Environment implements EnvironmentModel {
  variables: Partial<EnvironmentConfigModel> = {};

  async initialize({
    app,
    environment = ENVIRONMENT.DEVELOPMENT,
    overrrides,
  }: EnvironmentParamsModel = {}): Promise<void> {
    const currentEnv = { ...process.env };
    const environmentF = environment ?? process.env.NODE_ENV;
    const paths = filterNil([
      fromWorking('.env'),
      fromWorking('.env.public'),
      fromConfig('environment/.env.base'),
      ...(environmentF
        ? [fromWorking(`.env.${environmentF}`), fromConfig(`environment/.env.${environmentF}`)]
        : []),
      ...(app ? [fromPackages(app, '.env'), fromPackages(app, '.env.public')] : []),
    ]);
    paths.forEach((path) => existsSync(path) && config({ override: true, path }));
    this.variables = process.env = { ...process.env, ...currentEnv, ...(overrrides ?? {}) };

    Container.set(Environment, this);
  }
}
