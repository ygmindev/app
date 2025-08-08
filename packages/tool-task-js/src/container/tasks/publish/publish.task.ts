import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { config as containerConfig } from '@lib/config/container/container.server';
import { Docker } from '@tool/task/container/utils/Docker/Docker';
import { type TaskParamsModel } from '@tool/task/core/core.models';

const publish: TaskParamsModel<unknown> = {
  name: 'docker-publish',

  task: [
    async () => {
      const docker = new Docker({
        ...containerConfig.params(),
        workingDir: fromPackages('service-server-py'),
      });
      await docker.build();
    },
  ],
};

export default publish;
