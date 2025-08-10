import { config as containerConfig } from '@lib/config/container/container.node';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { type PublishParamsModel } from '@tool/task/container/templates/publish/publish.models';
import { Docker } from '@tool/task/container/utils/Docker/Docker';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';

const publishJobs: TaskParamsModel<PublishParamsModel> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'publish',

  onBefore: [({ options, target }) => options?.isBuild && target && `${target}-build`],

  options: async () => [{ key: 'isBuild', type: PROMPT_TYPE.CONFIRM }],

  task: [
    async ({ options, target }) => {
      if (target) {
        const docker = new Docker({
          ...containerConfig.params(),
          image: target,
        });
        await docker.publish(options?.isBuild);
      }
    },
  ],

  variables: () => ({
    ENV_PLATFORM: PLATFORM.NODE,
  }),
};

export default publishJobs;
