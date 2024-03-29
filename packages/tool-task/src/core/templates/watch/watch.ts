import { extensions } from '@lib/platform/core/utils/extensions/extensions';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type WatchParamsModel } from '@tool/task/core/templates/watch/watch.models';
import trimStart from 'lodash/trimStart';

export const watch: TaskParamsModel<WatchParamsModel> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  task: [
    ({ options }) => {
      const { executable, patterns, script } = options ?? {};
      const extensionsF = options?.extensions ?? extensions();
      const params = filterNil([
        patterns && patterns.map((pattern) => `--watch "${pattern}"`).join(' '),
        `--ext ${extensionsF.map((ext) => trimStart(ext, '.')).join(',')}`,
        executable && `--exec "${executable}"`,
        script,
      ]).join(' ');
      return `nodemon ${params}`;
    },
  ],
};
