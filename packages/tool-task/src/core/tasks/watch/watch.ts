import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { NODE_EXTENSIONS } from '@lib/shared/file/file.constants';
import type { WatchParamsModel } from '@tool/task/core/tasks/watch/watch.models';
import { command } from '@tool/task/core/utils/command/command';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';
import { trimStart } from 'lodash';

export const watch: RegisterParamsModel<WatchParamsModel> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'watch',

  task: async ({ options, root }) => {
    const { executable, extensions, patterns, script } = options;
    const params = [
      patterns && patterns.map((pattern) => `--watch "${pattern}"`).join(' '),
      `--ext ${(extensions || NODE_EXTENSIONS).map((ext) => trimStart(ext, '.')).join(',')}`,
      executable && `--exec "${executable}"`,
      script,
    ]
      .filter(Boolean)
      .join(' ');

    await command({ command: `${fromExecutable('nodemon')} ${params}`, root });
    return { status: TASK_RESULTS_STATUS_TYPE.SUCCESS };
  },
};
