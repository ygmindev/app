import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import {
  EnvironmentModel,
  EnvironmentParamsModel,
} from '@lib/backend/environment/utils/Environment/Environment.models';
import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { getAppRoot } from '@lib/backend/file/utils/getAppRoot/getAppRoot';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import { EnvironmentConfigModel } from '@lib/config/environment/environment.models';
import { StringKeyModel } from '@lib/shared/core/core.models';
import { Bootstrappable } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { config } from 'dotenv';
import { existsSync } from 'fs';

@withContainer()
export class Environment extends Bootstrappable implements EnvironmentModel {
  public app?: string;
  public environment?: string;
  public keys: Array<StringKeyModel<EnvironmentConfigModel>> = [];
  public overrrides?: Partial<EnvironmentConfigModel>;
  public variables: Partial<EnvironmentConfigModel> = { ...process.env };

  constructor(params: EnvironmentParamsModel = {}) {
    super();
    this.app = params.app;
    this.environment = params.environment;
    this.overrrides = params.overrrides;
  }

  exportEnv(pathname: string): void {
    writeFile({
      pathname,
      value: filterNil(this.keys.map((k) => `${k}=${this.variables[k]}`)).join('\n'),
    });
  }

  async onInitialize(): Promise<void> {
    const currentEnv = { ...process.env };
    const environmentF = this.environment ?? process.env.NODE_ENV;
    let appVariables: Array<string> = [];
    if (this.app) {
      const pkg = await getAppRoot(this.app);
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
    const keysF = new Set<StringKeyModel<EnvironmentConfigModel>>();
    paths.forEach((path) => {
      if (existsSync(path)) {
        const { parsed } = config({ override: true, path });
        parsed &&
          Object.keys(parsed).forEach((k) =>
            keysF.add(k as StringKeyModel<EnvironmentConfigModel>),
          );
      }
    });
    this.keys = [...keysF];
    Object.assign(this.variables, {
      ...process.env,
      ...currentEnv,
      ...(this.overrrides ?? {}),
      NODE_ENV: environmentF,
    });
    Object.assign(process.env, this.variables);
  }
}
