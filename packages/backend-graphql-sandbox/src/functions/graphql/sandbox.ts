import toNumber from 'lodash/toNumber';

import { _sandbox } from '#backend-graphql-sandbox/functions/graphql/_sandbox';
import { initialize } from '#lib-backend/setup/utils/initialize/initialize';

export const sandbox = async (): Promise<void> => {
  await initialize();
  await _sandbox({ port: process.env.SERVER_APP_PORT ? toNumber(process.env.SERVER_APP_PORT) : undefined });
};
