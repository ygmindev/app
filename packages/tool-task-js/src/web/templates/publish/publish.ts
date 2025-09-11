import { config as publishConfig } from '@lib/config/node/publish/publish';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type PublishParamsModel } from '@tool/task/web/templates/publish/publish.models';

export const publish: TaskParamsModel<PublishParamsModel> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'publish',

  onBefore: [({ options, target }) => !options?.skipBuild && `${target}-build`],

  task: [() => publishConfig.params().publishCommand()],
};
