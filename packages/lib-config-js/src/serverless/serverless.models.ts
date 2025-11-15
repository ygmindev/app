import {
  type SERVERLESS_PROVIDER,
  type SERVERLESS_RUNTIME,
} from '@lib/backend/serverless/serverless.constants';
import { type FileConfigModel } from '@lib/config/file/file.models';
import { type BundleConfigModel } from '@lib/config/node/bundle/bundle.models';
import { type ServerConfigModel } from '@lib/config/node/server/server.models';
import { type HTTP_METHOD, type HTTP_PROTOCOL } from '@lib/shared/http/http.constants';
import { type PLATFORM } from '@lib/shared/platform/platform.constants';
import { type AWS } from '@serverless/typescript';

export type ServerlessConfigModel = Pick<FileConfigModel, 'buildDir' | 'prunePatterns'> & {
  // TODO: separate into bundle.js?
  bundle: BundleConfigModel;

  configFilename: string;

  // TODO: to api
  functions: Record<
    string,
    {
      handler: string;
      method: HTTP_METHOD;
      pathname: string;
      protocol?: HTTP_PROTOCOL;
    }
  >;

  memory: number;

  name: string;

  platform: PLATFORM;

  provider: SERVERLESS_PROVIDER;

  region: string;

  runtime: SERVERLESS_RUNTIME;

  server: ServerConfigModel;

  timeout: number;

  dotenv(): void;
};

export type _ServerlessConfigModel = AWS;
