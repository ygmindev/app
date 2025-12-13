import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import {
  EnvironmentModel,
  EnvironmentParamsModel,
} from '@lib/backend/environment/utils/Environment/Environment.models';
import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { getAppRoot } from '@lib/backend/file/utils/getAppRoot/getAppRoot';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { EnvironmentConfigModel } from '@lib/config/environment/environment.models';
import { Bootstrappable } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { config } from 'dotenv';
import { existsSync } from 'fs';

@withContainer()
export class Environment extends Bootstrappable implements EnvironmentModel {
  protected _params?: EnvironmentParamsModel;
  public variables: Partial<EnvironmentConfigModel> = {};

  constructor(params: EnvironmentParamsModel = {}) {
    super();
    this._params = {
      app: params.app,
      environment: params.environment ?? ENVIRONMENT.DEVELOPMENT,
      overrrides: params.overrrides,
    };
  }

  async onInitialize(): Promise<void> {
    const currentEnv = { ...process.env };
    const environmentF = this._params?.environment ?? process.env.NODE_ENV;

    let appVariables: Array<string> = [];
    if (this._params?.app) {
      const pkg = await getAppRoot(this._params?.app);
      appVariables = [joinPaths([pkg, '.env']), joinPaths([pkg, '.env.public'])];
    }

    const paths = filterNil([
      fromWorking('.env'),
      fromWorking('.env.public'),
      fromConfig('environment/.env.base'),
      ...(environmentF
        ? [fromWorking(`.env.${environmentF}`), fromConfig(`environment/.env.${environmentF}`)]
        : []),
      ...appVariables,
    ]);
    paths.forEach((path) => existsSync(path) && config({ override: true, path }));
    this.variables = process.env = {
      ...process.env,
      ...currentEnv,
      ...(this._params?.overrrides ?? {}),
      NODE_ENV: environmentF,
    };

    Container.set(Environment, this);
  }
}
