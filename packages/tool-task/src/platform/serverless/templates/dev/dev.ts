import { fromPackages } from '#lib-backend/file/utils/fromPackages/fromPackages';
import { ENVIRONMENT } from '#lib-shared/environment/environment.constants';
import { type TaskParamsModel } from '#tool-task/core/core.models';
import { command } from '#tool-task/core/utils/command/command';
import { type DevParamsModel } from '#tool-task/platform/serverless/templates/dev/dev.models';

export const dev: TaskParamsModel<DevParamsModel> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  overrides: {
    NODE_OPTIONS: `--require ${fromPackages('lib-config/src/tracking/telemetry/telemetry.js')}`,
  },

  task: async ({ root }) => command('sls offline start --reloadHandler --verbose', { root }),
};
