import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { BUILD_DIR } from '@lib/config/file/file.constants';
import { config as webConfig } from '@lib/config/node/web/web';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type PublishParamsModel } from '@tool/task/web/templates/publish/publish.models';

export const publish: TaskParamsModel<PublishParamsModel> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'publish',

  onBefore: [({ options, target }) => !options?.noBuild && `${target}-build`],

  task: [
    // publish static
    // TODO: CI/CD build instead of direct copy
    ({ target }) =>
      target &&
      webConfig
        .params()
        .publishCommand({ pathname: fromWorking(BUILD_DIR, 'client'), target }),
  ],
};
