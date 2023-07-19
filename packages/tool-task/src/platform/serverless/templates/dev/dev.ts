import { fromPackages } from '#lib-backend/file/utils/fromPackages/fromPackages';
import { ENVIRONMENT } from '#lib-shared/environment/environment.constants';
import { type TaskParamsModel } from '#tool-task/core/core.models';

export const dev: TaskParamsModel = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  task: ['sls offline start --reloadHandler --verbose'],

  variables: () => ({
    NODE_OPTIONS: `--require ${fromPackages('lib-config/src/tracking/telemetry/telemetry.js')}`,
  }),
};
