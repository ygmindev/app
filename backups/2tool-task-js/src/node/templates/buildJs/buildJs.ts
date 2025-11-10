import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type BuildJsParamsModel } from '@tool/task/node/templates/buildJs/buildJs.models';
import { bundle } from '@tool/task/node/utils/bundle/bundle';

export const buildJs: TaskParamsModel<BuildJsParamsModel> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'build-js',

  task: [
    async ({ options }) => {
      if (options?.entryFiles) {
        await bundle(options);
      }
    },
  ],

  variables: () => ({
    ENV_PLATFORM: PLATFORM.NODE,
  }),
};

export default buildJs;
