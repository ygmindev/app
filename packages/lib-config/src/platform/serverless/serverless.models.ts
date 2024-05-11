import {
  type ServerlessProviderModel,
  type ServerlessRuntimeModel,
} from '@lib/backend/serverless/serverless.models';
import { type HttpConfigModel } from '@lib/config/http/http/http.models';
import { type _BundleConfigModel } from '@lib/config/node/bundle/bundle.models';
import { type PlatformModel } from '@lib/platform/core/core.models';
import { type EnvironmentModel } from '@lib/shared/environment/environment.models';
import { type HttpMethodModel } from '@lib/shared/http/http.models';
import { type UriParamsModel } from '@lib/shared/http/utils/uri/uri.models';
import { type AWS } from '@serverless/typescript';

export type ServerlessConfigModel = Pick<UriParamsModel, 'host' | 'port'> & {
  bundleConfig(): _BundleConfigModel;

  dotenv(): void;

  environment: EnvironmentModel;

  functions?: Record<
    string,
    {
      handler: string;
      method: HttpMethodModel;
      pathname: string;
    }
  >;

  httpConfig(): HttpConfigModel;

  name: string;

  platform: PlatformModel;

  provider: ServerlessProviderModel;

  runtime: ServerlessRuntimeModel;

  server: {
    cors: {
      allowedHeaders: Array<string>;
      allowedOrigins: Array<string>;
    };

    memory: number;

    region: string;

    timeout: number;
  };
};

export type _ServerlessConfigModel = AWS;
