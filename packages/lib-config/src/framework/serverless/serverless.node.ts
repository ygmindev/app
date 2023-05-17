import type { ServerlessConfigModel } from '@lib/config/framework/serverless/_serverless.models';
import { default as serverlessCenfigBase } from '@lib/config/framework/serverless/serverless.base';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { HTTP_METHOD, PING } from '@lib/shared/http/http.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

const serverlessConfig: ServerlessConfigModel = merge(
  [
    {
      functions: {
        [GRAPHQL]: {
          handler: 'src/node/graphql/graphql.main',
          method: HTTP_METHOD.POST,
          pathname: `/api/${GRAPHQL}`,
        },

        [PING]: {
          handler: 'src/core/ping/ping.main',
          method: HTTP_METHOD.GET,
          pathname: `/api/${PING}`,
        },
      },

      platform: PLATFORM.NODE,
    },

    serverlessCenfigBase,
  ],
  MERGE_STRATEGY.DEEP_APPEND,
);

export default serverlessConfig;
