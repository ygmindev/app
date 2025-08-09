import { type _JobConfigModel } from '@lib/config/job/_job.models';
import { type JobConfigModel } from '@lib/config/job/job.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

export const _job = ({ command, container, name, schedule }: JobConfigModel): _JobConfigModel => ({
  jobs: [
    {
      'run-container': {
        'runs-on': 'ubuntu-latest',
        steps: filterNil([
          container && {
            name: 'sign in',
            uses: 'docker/login-action@v2',
            with: {
              password: container?.password ?? '',
              registry: container?.server ?? '',
              username: container?.username ?? '',
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
  ],

  name,

  on: {
    schedule: [{ cron: `${schedule.minute ?? 0} ${schedule.hour ?? 0} * * ${schedule.day ?? 0}` }],
  },
});
