import type { ServerlessProviderModel } from '@lib/backend/serverless/serverless.models';
import { ConfigDynamicModel } from '@lib/config/core/core.models';
import type { _BundleConfigModel } from '@lib/config/node/bundle/bundle.models';
import type { PlatformModel } from '@lib/platform/core/core.models';
import type { CallableModel, ReturnTypeModel } from '@lib/shared/core/core.models';
import type { EnvironmentModel } from '@lib/shared/environment/environment.models';
import type { HttpMethodModel } from '@lib/shared/http/http.models';
import type { UriParamsModel } from '@lib/shared/http/utils/uri/uri.models';
import type { AWS } from '@serverless/typescript';
import type { TaskParamsModel } from '@tool/task/core/core.models';

export type ServerlessConfigModel = ConfigDynamicModel<{
  build: Pick<TaskParamsModel, 'task'>;

  bundleConfig: ReturnTypeModel<_BundleConfigModel>;

  dev: {
    lambdaPort: number;
  } & Pick<UriParamsModel, 'host' | 'port'> &
    Pick<TaskParamsModel, 'task'>;

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
}>;

export type _ServerlessConfigModel = ConfigDynamicModel<AWS>;
