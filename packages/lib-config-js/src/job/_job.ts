import { Docker } from '@lib/backend/container/utils/Docker/Docker';
import { type _JobConfigModel } from '@lib/config/job/_job.models';
import { JOB_TRIGGER } from '@lib/config/job/job.constants';
import { type JobConfigModel } from '@lib/config/job/job.models';
import { FREQUENCY } from '@lib/shared/datetime/datetime.models';
import reduce from 'lodash/reduce';

export const _job = ({ jobs, version }: JobConfigModel): _JobConfigModel => ({
  jobs: reduce(
    jobs,
    (result, v) => {
      const definition: Record<string, unknown> = {};
      definition.environment = v.environment;

      let steps: Array<unknown> = [];
      if (v.container) {
        const docker = new Docker(v.container);
        definition.docker = [
          {
            auth: {
              password: '${CONTAINER_PASSWORD}',
              username: '${CONTAINER_USERNAME}',
            },
            image: docker.url,
          },
        ];

        if (docker.url.includes('cimg')) {
          steps = ['checkout', 'setup_remote_docker'];
        }
      }

      definition.steps = [
        ...steps,
        ...v.commands.map((command) => ({
          run: {
            command: command.command,
            name: command.name,
          },
        })),
      ];

      return { ...result, [v.name]: definition };
    },
    {},
  ),

  version,

  workflows: reduce(
    jobs,
    (result, v) => {
      const branch = v.branch ?? 'main';
      switch (v.trigger) {
        case JOB_TRIGGER.COMMIT: {
          return {
            ...result,
            [v.name]: { jobs: [v.name], when: `pipeline.git.branch == "${branch}"` },
          };
        }
        case JOB_TRIGGER.SCHEDULE: {
          return {
            ...result,
            [v.name]: {
              jobs: [v.name],
              triggers: [
                {
                  schedule: {
                    cron: `${v.schedule.minute ?? 0} ${v.schedule.hour ?? 0} * * ${v.schedule.freq === FREQUENCY.DAILY ? '*' : FREQUENCY.WEEKLY ? (v.schedule.day ?? 0) : '*'}`,
                    filters: { branches: { only: [branch] } },
                  },
                },
              ],
            },
          };
        }
        default:
          return result;
      }
    },
    {},
  ),
});

// export const _job = ({ jobs }: JobConfigModel): _JobConfigModel =>
//   jobs.map(({ command, name, schedule }) => ({
//     jobs: {
//       [name]: {
//         permissions: {
//           contents: 'read',
//           packages: 'read',
//         },

//         'runs-on': 'ubuntu-latest',

//         steps: filterNil([
//           container && {
//             name: 'sign in',
//             uses: 'docker/login-action@v3',
//             with: {
//               password: '${{ github.token }}',
//               registry: container?.server ?? '',
//               username: '${{ github.actor }}',
//             },
//           },
//           {
//             name: `run ${name}`,
//             run: container
//               ? `docker run ${env?.map((v) => `-e ${v}=\${{ secrets.${v} }}`).join(' ')} --rm ${`${container.server ?? ''}/${container.username ?? ''}/${container.image ?? ''}`} ${command}`
//               : command,
//           },
//         ]),
//       },
//     },

//     name,

//     on: {
//       schedule: [
//         {
//           cron: `${schedule.minute ?? 0} ${schedule.hour ?? 0} * * ${schedule.freq === FREQUENCY.DAILY ? '*' : FREQUENCY.WEEKLY ? (schedule.day ?? 0) : '*'}`,
//         },
//       ],
//       workflow_dispatch: {},
//     },
//   }));
