import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { toRelative } from '@lib/backend/file/utils/toRelative/toRelative';
import type { PartialModel } from '@lib/shared/core/core.models';
import { guid } from '@lib/shared/core/utils/guid/guid';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { PING } from '@lib/shared/http/http.constants';
import type { AWS } from '@serverless/typescript';

const FUNCTION_PARAMS: AWS['functions'] = {
  default: {
    package: { patterns: ['src/**/*.ts'] },
    runtime: 'nodejs14.x',
  },
};

export const serverlessNodeConfig: PartialModel<AWS> = {
  custom: {
    webpack: {
      includeModules: { nodeModulesRelativeDir: toRelative(fromWorking(), fromRoot()) },
      keepOutputDirectory: false,
    },
  },

  functions: {
    [GRAPHQL]: merge({
      strategy: MERGE_STRATEGY.DEEP,
      values: [
        {
          events: [{ httpApi: { method: 'post', path: `/api/${GRAPHQL}` } }],
          handler: 'src/node/graphql/graphql.main',
        },
        FUNCTION_PARAMS.default,
      ],
    }),

    [PING]: merge({
      strategy: MERGE_STRATEGY.DEEP,
      values: [
        {
          events: [{ httpApi: { method: 'get', path: `/api/${PING}/${guid()}` } }],
          handler: 'src/core/ping/ping.main',
        },
        FUNCTION_PARAMS.default,
      ],
    }),
  },
};
