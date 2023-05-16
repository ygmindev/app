import type { ServerlessProviderModel } from '@lib/backend/serverless/serverless.models';
import type { _BundleConfigParamsModel } from '@lib/config/node/bundle/_bundle.models';
import type { CallableModel, CallablePromiseModel } from '@lib/shared/core/core.models';
import type { EnvironmentModel } from '@lib/shared/environment/environment.models';
import type { HttpMethodModel } from '@lib/shared/http/http.models';
import type { UriParamsModel } from '@lib/shared/http/utils/uri/uri.models';
import type { PlatformModel } from '@lib/shared/platform/platform.models';
import type { AWS } from '@serverless/typescript';
import type { RunWithConfigStringParamsModel } from '@tool/task/core/utils/runWithConfig/runWithConfig.models';

export interface _ServerlessConfigParamsModel {
  build: RunWithConfigStringParamsModel;

  bundle: _BundleConfigParamsModel;

  dev: {
    lambdaPort: number;
  } & Pick<UriParamsModel, 'host' | 'port'> &
    RunWithConfigStringParamsModel;

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
}

export type _ServerlessConfigModel = CallablePromiseModel<AWS>;
