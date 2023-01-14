import { bundleConfig } from '@lib/config/javascript/bundle/configs/bundle.config.node';
import { serverlessConfig as serverlessConfigBase } from '@lib/config/server/serverless/configs/serverless.config.base';
import type { ServerlessConfigParamsModel } from '@lib/config/server/serverless/serverless.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { HTTP_METHOD, PING } from '@lib/shared/http/http.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

export const serverlessConfig: ServerlessConfigParamsModel = merge({
  strategy: MERGE_STRATEGY.DEEP_APPEND,

  values: [
    {
      bundle: bundleConfig,

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

    serverlessConfigBase,
  ],
});
