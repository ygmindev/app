import { serverlessConfig as configBase } from '@lib/config/serverless/serverless.node';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { HTTP_METHOD } from '@lib/shared/http/http.constants';

let serverlessConfig = configBase;

serverlessConfig = serverlessConfig.extend(() => ({
  functions: {
    [GRAPHQL]: {
      handler: 'src/functions/graphql/graphql.main',
      method: HTTP_METHOD.POST,
      pathname: `/api/${GRAPHQL}`,
    },
  },
}));

export { serverlessConfig };
