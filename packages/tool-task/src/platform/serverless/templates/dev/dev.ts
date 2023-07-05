import { _config } from '#lib-config/core/setup/setup.node';
import { ENVIRONMENT } from '#lib-shared/environment/environment.constants';
import { type TaskParamsModel } from '#tool-task/core/core.models';
import { command } from '#tool-task/core/utils/command/command';
import { type DevParamsModel } from '#tool-task/platform/serverless/templates/dev/dev.models';

export const dev: TaskParamsModel<DevParamsModel> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  task: async ({ root }) => {
    await _config.setup();
    return command('sls offline start --reloadHandler --verbose', { root });
  },
};
