import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { LAYER_TASKS } from '@tool/task/platform/serverless/templates/build/build';

export const release: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'release',

  task: [
    () =>
      `npx sls config credentials --provider aws --profile default --overwrite --key ${process.env.AWS_ACCESS_KEY_ID} --secret ${process.env.AWS_SECRET_ACCESS_KEY}`,

    ...(process.env.SERVERLESS_RUNTIME === 'container' ? [] : LAYER_TASKS),

    fromExecutable('sls deploy --aws-profile default --verbose'),
  ],
};
