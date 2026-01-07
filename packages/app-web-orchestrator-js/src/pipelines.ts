import { buildPipelines } from '@tool/task/orchestrator/utils/buildPipelines/buildPipelines';
import { webBuild } from '@tool/task/web/workflows/webBuild/webBuild';
import { WEB_BUILD } from '@tool/task/web/workflows/webBuild/webBuild.constants';

import { name as app } from '../package.json';

export const pipelines = buildPipelines({
  app,
  pipelines: [
    {
      name: WEB_BUILD,
      workflows: [[webBuild, {}, {}]],
    },
  ],
});
