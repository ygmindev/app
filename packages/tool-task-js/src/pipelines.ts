import { PING } from '@lib/shared/http/http.constants';
import { pingWorkflow } from '@tool/task/dev/workflows/pingWorkflow/pingWorkflow';
import { buildConfig } from '@tool/task/node/workflows/buildConfig/buildConfig';
import { BUILD_CONFIG } from '@tool/task/node/workflows/buildConfig/buildConfig.constants';
import { buildPipelines } from '@tool/task/orchestrator/utils/buildPipelines/buildPipelines';

import { name as app } from '../package.json';

export const pipelines = buildPipelines({
  app,
  pipelines: [
    {
      name: BUILD_CONFIG,
      workflows: [buildConfig],
    },

    {
      name: PING,
      workflows: [pingWorkflow],
    },
  ],
});
