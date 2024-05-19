import {
  type ServerlessProviderModel,
  type ServerlessRuntimeModel,
} from '@lib/backend/serverless/serverless.models';
import { type BundleConfigModel } from '@lib/config/node/bundle/bundle.models';
import { type ServerConfigModel } from '@lib/config/server/server.models';
import { type EnvironmentModel } from '@lib/shared/environment/environment.models';
import { type HttpMethodModel } from '@lib/shared/http/http.models';
import { type PlatformModel } from '@lib/shared/platform/platform.models';
import { type AWS } from '@serverless/typescript';

export type ServerlessConfigModel = ServerConfigModel & {
  // TODO: separate into bundle.js?
  bundleConfig(): BundleConfigModel;

  configFile: string;

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
