import { _config } from '@lib/config/proxy/proxy';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';

export const proxy: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'proxy',

  task: [() => `printf '%s\n' ${JSON.stringify(JSON.stringify(_config()))} | caddy run --config -`],
};
