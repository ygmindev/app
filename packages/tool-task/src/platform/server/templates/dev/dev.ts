import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { BUNDLE_CONFIG } from '@lib/config/node/bundle/bundle.constants';
import { SERVER_CONFIG } from '@lib/config/platform/server/server.constants';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';

export const dev: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  task: [
    () =>
      fromExecutable(
        `vite-node --config ${BUNDLE_CONFIG.configFile} --watch ${SERVER_CONFIG.entryFile}`,
      ),
  ],
};
