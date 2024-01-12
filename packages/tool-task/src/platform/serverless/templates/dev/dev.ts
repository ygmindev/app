import { fromExecutable } from '#lib-backend/file/utils/fromExecutable/fromExecutable';
import { ENVIRONMENT } from '#lib-shared/environment/environment.constants';
import { type TaskParamsModel } from '#tool-task/core/core.models';

export const dev: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  task: [fromExecutable('sls offline start --reloadHandler --verbose')],

  // variables: () => ({
  //   NODE_OPTIONS: `--require ${fromPackages('lib-config/src/tracking/telemetry/telemetry.js')}`,
  // }),
};
