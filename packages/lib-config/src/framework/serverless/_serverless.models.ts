import type { ServerlessProviderModel } from '@lib/backend/serverless/serverless.models';
import { ConfigDynamicModel, ConfigStaticModel, RunWithConfigParamsModel } from '@lib/config/core/core.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { EnvironmentModel } from '@lib/shared/environment/environment.models';
import type { HttpMethodModel } from '@lib/shared/http/http.models';
import type { UriParamsModel } from '@lib/shared/http/utils/uri/uri.models';
import type { PlatformModel } from '@lib/shared/platform/platform.models';
import type { AWS } from '@serverless/typescript';

export type ServerlessConfigModel = ConfigStaticModel<{
  build: RunWithConfigParamsModel;

  dev: {
    lambdaPort: number;
  } & Pick<UriParamsModel, 'host' | 'port'> &
    RunWithConfigParamsModel;

  dotenv: CallableModel;

  environment: EnvironmentModel;

  functions?: Record<
    string,
    {
      handler: string;
      method: HttpMethodModel;
      pathname: string;
    }
  >;

  name: string;

  platform: PlatformModel;

  provider: ServerlessProviderModel;

  server: {
    cors: {
      allowedHeaders: Array<string>;
      allowedOrigins: Array<string>;
    };

    memory: number;

    region: string;

    timeout: number;
  };
}>

export type _ServerlessConfigModel = ConfigDynamicModel<AWS>;
