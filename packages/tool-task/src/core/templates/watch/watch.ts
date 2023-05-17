import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import bundleConfig from '@lib/config/node/bundle/bundle.base';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import type { WatchParamsModel } from '@tool/task/core/templates/watch/watch.models';
import { command } from '@tool/task/core/utils/command/command';
import trimStart from 'lodash/trimStart';

export const watch: TaskParamsModel<WatchParamsModel> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'watch',

  task: async ({ options, root }) => {
    const { executable, extensions, patterns, script } = options || {};
    const _extensions = extensions || bundleConfig.extensions;
    const params = [
      patterns && patterns.map((pattern) => `--watch "${pattern}"`).join(' '),
      `--ext ${_extensions.map((ext) => trimStart(ext, '.')).join(',')}`,
      executable && `--exec "${executable}"`,
      script,
    ]
      .filter(Boolean)
      .join(' ');

    await command({ command: `${fromExecutable('nodemon')} ${params}`, root });
    return { status: TASK_STATUS.SUCCESS };
  },
};
