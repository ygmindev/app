import { Docker } from '@lib/backend/container/utils/Docker/Docker';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { containerConfig as toolTaskContainerConfig } from '@lib/config/container/container.toolTask';
import { _job } from '@lib/config/job/_job';
import { type _JobConfigModel } from '@lib/config/job/_job.models';
import { JOB_TRIGGER } from '@lib/config/job/job.constants';
import { type JobConfigModel } from '@lib/config/job/job.models';
import { Config } from '@lib/config/utils/Config/Config';
import { FREQUENCY } from '@lib/shared/datetime/datetime.models';
import { PING } from '@lib/shared/http/http.constants';

export const jobConfig = new Config<JobConfigModel, _JobConfigModel>({
  config: _job,

  params: () => {
    const docker = new Docker({
      ...toolTaskContainerConfig.params(),
      environment: { PKG_NAME: 'tool-task-js' },
    });
    return {
      jobs: [
        {
          commands: [
            {
              command: docker.buildCommand(),
              name: 'build',
            },
            {
              command: docker.publishCommand(),
              name: 'publish',
            },
          ],
          container: { image: 'base', server: 'cimg', tag: 'stable' },
          name: 'build and publish tools',
          trigger: JOB_TRIGGER.COMMIT,
        },

        {
          commands: [
            {
              command: 'cd /app && npm run run pt',
              name: PING,
            },
          ],
          container: toolTaskContainerConfig.params(),
          name: PING,
          schedule: { freq: FREQUENCY.DAILY },
          trigger: JOB_TRIGGER.SCHEDULE,
        },
      ],
      outPathname: fromRoot('.circleci/config.yml'),
      version: 2.1,
    };
  },
});

// import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
// import { containerConfig as pythonContainerConfig } from '@lib/config/container/container.python';
// import { _job } from '@lib/config/job/_job';
// import { type _JobConfigModel } from '@lib/config/job/_job.models';
// import { JOB_TRIGGER } from '@lib/config/job/job.constants';
// import { type JobConfigModel } from '@lib/config/job/job.models';
// import { Config } from '@lib/config/utils/Config/Config';
// import { FREQUENCY } from '@lib/shared/datetime/datetime.models';
// import { PING } from '@lib/shared/http/http.constants';

// export const jobConfig = new Config<JobConfigModel, _JobConfigModel>({
//   config: _job,

//   params: () => ({
//     jobs: [
//       {
//         commands: [
//           {
//             command: 'python /app/packages/service-server-py/src/ping.py',
//             name: PING,
//           },
//         ],
//         container: {
//           ...pythonContainerConfig.params(),
//           image: 'service_server',
//           password: '${CONTAINER_PASSWORD}',
//           username: '${CONTAINER_USERNAME}',
//         },
//         name: PING,
//         schedule: { freq: FREQUENCY.DAILY },
//         trigger: JOB_TRIGGER.SCHEDULE,
//       },
//     ],
//     outPathname: fromRoot('.circleci/config.yml'),
//     version: 2.1,
//   }),
// });
