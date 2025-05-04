import { config as publishConfig } from '@lib/config/node/publish/publish.web';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import buildText from '@tool/task/core/templates/buildText/buildText';
import { type BuildTextParamsModel } from '@tool/task/core/templates/buildText/buildText.models';

export const buildConfigPublish: TaskParamsModel<BuildTextParamsModel> = {
  ...buildText,

  name: 'build-config-publish',

  overrides: () => ({
    path: publishConfig.params().configPathname,
    value: publishConfig.config(),
  }),
};
