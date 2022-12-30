import { serverlessConfig as serverlessConfigBase } from '@lib/config/server/serverless/configs/serverless.base.config';
import type { ServerlessConfigParamsModel } from '@lib/config/server/serverless/serverless.models';
import { guid } from '@lib/shared/core/utils/guid/guid';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { HTTP_METHOD, PING } from '@lib/shared/http/http.constants';

export const serverlessConfig: ServerlessConfigParamsModel = merge({
  strategy: MERGE_STRATEGY.DEEP_APPEND,

  values: [
    {
      bundle: {
        include: ['src/**/*.ts'],
      },

      functions: {
        [GRAPHQL]: {
          handler: 'src/node/graphql/graphql.main',
          method: HTTP_METHOD.POST,
          pathname: `/api/${GRAPHQL}`,
        },

        [PING]: {
          handler: 'src/core/ping/ping.main',
          method: HTTP_METHOD.GET,
          pathname: `/api/${PING}/${guid()}`,
        },
      },
    },

    serverlessConfigBase,
  ],
});
