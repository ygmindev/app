import {
  type SERVERLESS_PROVIDER,
  type SERVERLESS_RUNTIME,
} from '@lib/backend/serverless/serverless.constants';
import { type RequestContextModel } from '@lib/config/platform/api/api.models';

export type ServerlessProviderModel = `${SERVERLESS_PROVIDER}`;

export type ServerlessRuntimeModel = `${SERVERLESS_RUNTIME}`;

export type ServerlessRequestContextModel = RequestContextModel;
