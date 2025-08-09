import { config as containerConfig } from '@lib/config/container/container.server';
import { Docker } from '@tool/task/container/utils/Docker/Docker';
import { type TaskParamsModel } from '@tool/task/core/core.models';

export const publish: TaskParamsModel<unknown> = {
  name: 'container-publish',

  task: [
    async () => {
      const docker = new Docker(containerConfig.params());
      await docker.publish(true);
      // console.warn(await docker.run(['ni']));
    },
  ],
};
