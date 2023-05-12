import type { _ServerlessConfigParamsModel } from '@lib/config/framework/serverless/_serverless.models';
import { serverlessConfigParamsBase } from '@lib/config/framework/serverless/params/serverless.params.base';
import { bundleConfigParams } from '@lib/config/javascript/bundle/params/bundle.params.node';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { HTTP_METHOD, PING } from '@lib/shared/http/http.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

export const serverlessConfigParamsNode: _ServerlessConfigParamsModel = merge({
  strategy: MERGE_STRATEGY.DEEP_APPEND,

  values: [
    {
      bundle: bundleConfigParams,

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

    serverlessConfigParamsBase,
  ],
});
