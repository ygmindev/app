import { type _JobConfigModel } from '@lib/config/job/_job.models';
import { type JobConfigModel } from '@lib/config/job/job.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { FREQUENCY } from '@lib/shared/datetime/datetime.models';

export const _job = ({ container, jobs }: JobConfigModel): _JobConfigModel =>
  jobs.map(({ command, name, schedule }) => ({
    jobs: {
      'run-container': {
        'runs-on': 'ubuntu-latest',
        steps: filterNil([
          container && {
            name: 'sign in',
            uses: 'docker/login-action@v2',
            with: {
              password: '${{ secrets.GITHUB_TOKEN }}',
              registry: container?.server ?? '',
              username: '${{ secrets.GITHUB_USERNAME }}',
            },
          },
          {
            name: `run ${name}`,
            run: container
              ? `docker run --rm ${`${container.server ?? ''}/${container.username ?? ''}/${container.image ?? ''}`} ${command}`
              : command,
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
  }));
