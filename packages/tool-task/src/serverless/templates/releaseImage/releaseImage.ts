import { SERVERLESS_RUNTIME } from '@lib/backend/serverless/serverless.constants';
import { BOOLEAN_STRING } from '@lib/shared/core/core.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { release } from '@tool/task/serverless/templates/release/release';
import { type ReleaseImageParamsModel } from '@tool/task/serverless/templates/releaseImage/releaseImage.models';

export const releaseImage: TaskParamsModel<ReleaseImageParamsModel> = {
  ...release,

  name: 'release-image',

  onBefore: [
    ({ options, target }) => options?.isBuild === BOOLEAN_STRING.TRUE && `run ${target}-build`,
  ],

  options: [
    {
      defaultValue: BOOLEAN_STRING.TRUE,
      key: 'isBuild',
      options: [BOOLEAN_STRING.TRUE, BOOLEAN_STRING.FALSE],
      type: PROMPT_TYPE.LIST,
    },
  ],

  variables: () => ({
    SERVERLESS_RUNTIME: SERVERLESS_RUNTIME.CONTAINER,
  }),
};
