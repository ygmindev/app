import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { SERVERLESS_PROVIDER } from '@lib/backend/serverless/serverless.constants';
import type { _ServerlessConfigParamsModel } from '@lib/config/framework/serverless/_serverless.models';
import bundleConfigParams from '@lib/config/node/bundle/params/bundle.params.base';
import type { EnvironmentModel } from '@lib/shared/environment/environment.models';
import { setEnvironment } from '@lib/shared/environment/utils/setEnvironment/setEnvironment';
import { appUri } from '@lib/shared/http/utils/appUri/appUri';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import toNumber from 'lodash/toNumber';

const serverlessConfigParams: _ServerlessConfigParamsModel = {
  build: {
    command: fromExecutable('sls package'),
  },

  bundle: bundleConfigParams,

  dev: {
    command: fromExecutable('sls offline start --reloadHandler'),

    host: process.env.APP_SERVER_API_HOST,

    lambdaPort: toNumber(process.env.SERVER_LAMBDA_PORT),

    port: toNumber(process.env.APP_SERVER_API_PORT),
  },

  dotenv: () => setEnvironment(),

  environment: process.env.NODE_ENV as EnvironmentModel,

  name: 'serverless',

  platform: PLATFORM.BASE,

  provider: SERVERLESS_PROVIDER.AWS,

  server: {
    cors: {
      allowedHeaders: ['*'],

      allowedOrigins: ['WEB'].map((name) => appUri({ name })),
    },

    memory: 128,

    region: process.env.SERVER_REGION,

    timeout: 10,
  },
};

export default serverlessConfigParams;
