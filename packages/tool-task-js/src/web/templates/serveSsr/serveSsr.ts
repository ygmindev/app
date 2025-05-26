import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type ServeSsrParamsModel } from '@tool/task/web/templates/serveSsr/serveSsr.models';

export const serveSsr: TaskParamsModel<ServeSsrParamsModel> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'serve-ssr',

  task: [
    // TODO fix root
    ({ options }) =>
      `${fromExecutable('func')} host start --no-build --useHttps --port ${options?.port ?? process.env.SERVER_APP_SSR_PORT}`,
  ],
};
