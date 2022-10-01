import { bootstrap } from '@lib/backend/bootstrap/bootstrap';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { _graphql } from '@server/sandbox/graphql/_graphql';
import { toNumber } from 'lodash';

const REACT_APP_SERVER_API_PORT = getEnv('REACT_APP_SERVER_API_PORT', null);

export const graphql = async (): Promise<unknown> => {
  await bootstrap();
  return _graphql({
    port: REACT_APP_SERVER_API_PORT ? toNumber(REACT_APP_SERVER_API_PORT) : undefined,
  });
};
