import type { ServerlessProviderModel } from '@lib/config/server/serverless/serverless.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { EnvironmentModel } from '@lib/shared/environment/environment.models';
import type { HttpMethodModel } from '@lib/shared/http/http.models';
import type { UriParamsModel } from '@lib/shared/http/utils/uri/uri.models';

export interface _ServerlessConfigParamsModel {
  bundle: {
    exclude?: Array<string>;
    include?: Array<string>;
  };

  dotenv?: CallableModel;

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

  offline?: {
    lambdaPort: number;
  } & Pick<UriParamsModel, 'host' | 'port'>;

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
