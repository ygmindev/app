import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { EXTENSIONS_JS } from '@lib/shared/file/file.constants';
import type { WatchParamsModel } from '@tool/task/core/templates/watch/watch.models';
import { command } from '@tool/task/core/utils/command/command';
import { trimStart } from 'lodash';

export const watch: TaskParamsModel<WatchParamsModel> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'watch',

  task: async ({ options, root }) => {
    const { executable, extensions, patterns, script } = options;
    const params = [
      patterns && patterns.map((pattern) => `--watch "${pattern}"`).join(' '),
      `--ext ${(extensions || EXTENSIONS_JS).map((ext) => trimStart(ext, '.')).join(',')}`,
      executable && `--exec "${executable}"`,
      script,
    ]
      .filter(Boolean)
      .join(' ');

    await command({ command: `${fromExecutable('nodemon')} ${params}`, root });
    return { status: TASK_STATUS.SUCCESS };
  },
};
