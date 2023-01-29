import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { EXCLUDE_PATTERNS } from '@lib/shared/file/file.constants';
import { dateTimeFormat } from '@lib/shared/formatting/utils/dateTimeFormat/dateTimeFormat';
import { DATE_TIME_FORMAT_TYPE } from '@lib/shared/formatting/utils/dateTimeFormat/dateTimeFormat.constants';
import { BACKUP_DIR } from '@tool/task/core/tasks/backup/backup.constants';
import type { BackupParamsModel } from '@tool/task/core/tasks/backup/backup.models';
import { command } from '@tool/task/core/utils/command/command';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import kebabCase from 'lodash/kebabCase';
import { join } from 'path';

const backup: TaskParamsModel<BackupParamsModel> = {
  name: 'backup',

  task: async ({ options, root }) => {
    const { excludes, includes, name } = options;
    const _name = name || (await prompt([{ key: 'name' }])).name;
    const _includes = includes || [fromRoot('*')];
    const _excludes = excludes || EXCLUDE_PATTERNS;
    const dest = join(
      BACKUP_DIR,
      `${kebabCase(_name)}-${kebabCase(
        dateTimeFormat({ format: DATE_TIME_FORMAT_TYPE.DATE_TIME_MINUTES }),
      )}`,
    );
    await command({
      command: `mkdir -p backups && mkdir -p ${dest} && rsync -r ${_includes.join(' ')}  ${_excludes
        .map((pattern) => `--exclude '${pattern.replace('**/', '')}'`)
        .join(' ')} ${dest}`,
      root: fromRoot(),
    });
    process.chdir(root || fromRoot());
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default backup;
