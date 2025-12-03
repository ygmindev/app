import { DEV } from '@lib/shared/dev/dev.constants';
import { serverDev } from '@tool/task/node/workflows/serverDev/serverDev';
import { buildPipeline } from '@tool/task/orchestrator/utils/buildPipeline/buildPipeline';

// import { name as appServer } from '../../service-orchestrator-js/package.json';
import { name as app } from '../package.json';

export const pipelines = buildPipeline({
  app,
  pipelines: [
    {
      name: `${app} ${DEV}`,
      workflows: [[serverDev, {}, { app }]],
    },

    // {
    //   name: `${appServer} ${DEV}`,
    //   workflows: [[serverDev, {}, { app: appServer }]],
    // },
  ],
});
