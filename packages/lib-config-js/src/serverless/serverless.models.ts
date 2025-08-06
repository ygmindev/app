import {
  type ServerlessProviderModel,
  type ServerlessRuntimeModel,
} from '@lib/backend/serverless/serverless.models';
import { type FileConfigModel } from '@lib/config/file/file.models';
import { type BundleConfigModel } from '@lib/config/node/bundle/bundle.models';
import { type ServerConfigModel } from '@lib/config/node/server/server.models';
import { type ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type HttpMethodModel, type HttpProtocolModel } from '@lib/shared/http/http.models';
import { type PlatformModel } from '@lib/shared/platform/platform.models';
import { type AWS } from '@serverless/typescript';

export type ServerlessConfigModel = Pick<FileConfigModel, 'buildDir' | 'prunePatterns'> & {
  // TODO: separate into bundle.js?
  bundle: BundleConfigModel;

  configFilename: string;

  dotenv(): void;

  environment: ENVIRONMENT;

  // TODO: to api
  functions: Record<
    string,
    {
      handler: string;
      method: HttpMethodModel;
      pathname: string;
      protocol?: HttpProtocolModel;
    }
  >;

  memory: number;

  name: string;

  platform: PlatformModel;

  provider: ServerlessProviderModel;

  region: string;

  runtime: ServerlessRuntimeModel;

  server: ServerConfigModel;

  timeout: number;
};

export type _ServerlessConfigModel = AWS;
