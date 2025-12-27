import { test } from '@tool/task/node/workflows/test/test';
import { TEST } from '@tool/task/node/workflows/test/test.constants';
import { buildPipelines } from '@tool/task/orchestrator/utils/buildPipelines/buildPipelines';

import { name as app } from '../package.json';

export const pipelines = buildPipelines({
  app,
  pipelines: [
    {
      name: TEST,
      workflows: [test],
    },
  ],
});
