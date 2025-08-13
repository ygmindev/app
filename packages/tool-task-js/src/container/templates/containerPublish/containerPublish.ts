import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { config as containerConfig } from '@lib/config/container/container.node';
import { config as bundleConfig } from '@lib/config/node/bundle/bundle.base';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { type ContainerPublishParamsModel } from '@tool/task/container/templates/containerPublish/containerPublish.models';
import { Docker } from '@tool/task/container/utils/Docker/Docker';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';

export const containerPublish: TaskParamsModel<ContainerPublishParamsModel> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'container-publish',

  onBefore: [
    ({ options, target }) => options?.isBuild && target && `${target}-build`,

    ({ target }) => {
      const { buildDir, envFilename } = bundleConfig.params();
      return `gh secret set -f ${fromPackages(target, buildDir, envFilename)} --repo ${process.env.GITHUB_REPO}`;
    },
  ],

  options: async () => [{ defaultValue: true, key: 'isBuild', type: PROMPT_TYPE.CONFIRM }],

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
