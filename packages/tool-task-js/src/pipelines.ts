import { buildConfig } from '@tool/task/node/workflows/buildConfig/buildConfig';
import { BUILD_CONFIG } from '@tool/task/node/workflows/buildConfig/buildConfig.constants';
import { buildPipeline } from '@tool/task/orchestrator/utils/buildPipeline/buildPipeline';

import { name as app } from '../package.json';

export const pipelines = buildPipeline({
  app,
  pipelines: [
    {
      name: BUILD_CONFIG,
      workflows: [buildConfig],
    },
  ],
});
