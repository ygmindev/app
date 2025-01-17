import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import bundleConfig from '@lib/config/node/bundle/bundle.node';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';

export const build: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'build',

  task: [fromExecutable(`vite-node build --config ${bundleConfig.params().configFilename}`)],
};
