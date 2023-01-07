import type { BundleConfigParamsModel } from '@lib/config/javascript/bundle/bundle.models';
import type { ServerlessProviderModel } from '@lib/config/server/serverless/serverless.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { EnvironmentModel } from '@lib/shared/environment/environment.models';
import type { HttpMethodModel } from '@lib/shared/http/http.models';
import type { UriParamsModel } from '@lib/shared/http/utils/uri/uri.models';
import type { PlatformModel } from '@lib/shared/platform/platform.models';

export interface _ServerlessConfigParamsModel {
  bundle: BundleConfigParamsModel;

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

  offline: {
    lambdaPort: number;
  } & Pick<UriParamsModel, 'host' | 'port'>;

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
