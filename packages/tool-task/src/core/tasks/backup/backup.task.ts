import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { config } from '@lib/config/core/file/file';
import { dateTimeFormat } from '@lib/shared/format/utils/dateTimeFormat/dateTimeFormat';
import { DATE_TIME_FORMAT_TYPE } from '@lib/shared/format/utils/dateTimeFormat/dateTimeFormat.constants';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import { BACKUP_DIR } from '@tool/task/core/tasks/backup/backup.constants';
import type { BackupParamsModel } from '@tool/task/core/tasks/backup/backup.models';
import { command } from '@tool/task/core/utils/command/command';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import kebabCase from 'lodash/kebabCase';
import { join } from 'path';

const backup: TaskParamsModel<BackupParamsModel> = {
  name: 'backup',

  task: async ({ options, root }) => {
    const { excludes, includes, name } = options || {};
    const _name = name || (await prompt([{ key: 'name' }])).name;
    const _includes = includes || [fromRoot('*')];
    const _excludes = excludes || config.excludePatterns;
    const dest = join(
      BACKUP_DIR,
      `${kebabCase(_name)}-${kebabCase(
        dateTimeFormat({ format: DATE_TIME_FORMAT_TYPE.DATE_TIME_MINUTES }),
      )}`,
    );
    await command(
      `mkdir -p backups && mkdir -p ${dest} && rsync -r ${_includes.join(' ')}  ${_excludes
        .map((pattern) => `--exclude '${pattern.replace('**/', '')}'`)
        .join(' ')} ${dest}`,
    );
    process.chdir(root || fromRoot());
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default backup;
