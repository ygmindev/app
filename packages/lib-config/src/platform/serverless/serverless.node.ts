import type { ServerlessConfigModel, _ServerlessConfigModel } from '@lib/config/platform/serverless/serverless.models';
import { config as configBase } from '@lib/config/platform/serverless/serverless.base';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { HTTP_METHOD, PING } from '@lib/shared/http/http.constants';
import { PLATFORM } from '@lib/platform/core/core.constants';
import { _serverless } from '@lib/config/platform/serverless/_serverless';

export const config: ServerlessConfigModel = () => merge(
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

    configBase(),
  ],
  MERGE_STRATEGY.DEEP_APPEND,
);

export const _config: _ServerlessConfigModel = () => _serverless(config());
