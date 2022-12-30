import type { _ServerlessConfigParamsModel } from '@lib/config/server/serverless/_serverless.models';
import type { SERVERLESS_PROVIDER } from '@lib/config/server/serverless/serverless.constants';

export interface ServerlessConfigParamsModel extends _ServerlessConfigParamsModel {}

export type ServerlessProviderModel = `${SERVERLESS_PROVIDER}`;
