import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { DIST_DIR } from '@lib/config/file/file.constants';
import { type _JobConfigModel } from '@lib/config/job/_job.models';
import { type JobConfigModel } from '@lib/config/job/job.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { FREQUENCY } from '@lib/shared/datetime/datetime.models';

export const _job = ({ container, jobs }: JobConfigModel): _JobConfigModel =>
  jobs.map(({ command, env, name, schedule }) => {
    const commandF = command ?? name;
    return {
      jobs: {
        'run-container': {
          'runs-on': 'ubuntu-latest',
          steps: filterNil([
            container && {
              env: env
                ? env.reduce((result, k) => ({ ...result, [k]: `\${{ secrets.${k} }}` }), {})
                : undefined,
              name: 'sign in',
              uses: 'docker/login-action@v2',
              with: {
                password: '${{ github.token }}',
                registry: container?.server ?? '',
                username: '${{ github.actor }}',
              },
            },
            {
              name: `run ${name}`,
              run: container
                ? `docker run --rm ${`${container.server ?? ''}/${container.username ?? ''}/${container.image ?? ''}`} ${joinPaths([DIST_DIR, commandF])}`
                : commandF,
            },
          ]),
        },
      },

      name,

      on: {
        schedule: [
          {
            cron: `${schedule.minute ?? 0} ${schedule.hour ?? 0} * * ${schedule.freq === FREQUENCY.DAILY ? '*' : FREQUENCY.WEEKLY ? (schedule.day ?? 0) : '*'}`,
          },
        ],
        workflow_dispatch: {},
      },
    };
  });
