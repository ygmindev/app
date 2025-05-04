import { config as publishConfig } from '@lib/config/node/publish/publish.web';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { buildConfigPublish } from '@tool/task/web/templates/buildConfigPublish/buildConfigPublish';
import { type PublishParamsModel } from '@tool/task/web/templates/publish/publish.models';

export const publish: TaskParamsModel<PublishParamsModel> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'publish',

  onBefore: [
    ({ options, target }) => !options?.noBuild && `${target}-build`,

    ({ target }) => `${target}-${buildConfigPublish.name}`,
  ],

  task: [() => publishConfig.params().publishCommand()],
};
