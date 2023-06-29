import kebabCase from 'lodash/kebabCase';
import { join } from 'path';

import { fromRoot } from '#lib-backend/file/utils/fromRoot/fromRoot';
import { config } from '#lib-config/core/file/file';
import { dateTimeFormat } from '#lib-shared/format/utils/dateTimeFormat/dateTimeFormat';
import { DATE_TIME_FORMAT_TYPE } from '#lib-shared/format/utils/dateTimeFormat/dateTimeFormat.constants';
import { TASK_STATUS } from '#tool-task/core/core.constants';
import { type TaskParamsModel } from '#tool-task/core/core.models';
import { type BackupParamsModel } from '#tool-task/core/tasks/backup/backup.models';
import { command } from '#tool-task/core/utils/command/command';
import { prompt } from '#tool-task/core/utils/prompt/prompt';

const backup: TaskParamsModel<BackupParamsModel> = {
  name: 'backup',

  task: async ({ options, root }) => {
    const { excludes, includes, name } = options || {};
    const nameF = name || (await prompt([{ key: 'name' }])).name;
    const includesF = includes || [fromRoot('*')];
    const excludesF = excludes || config.excludePatterns;
    const dest = join(
      config.backupDir,
      `${kebabCase(nameF)}-${kebabCase(
        dateTimeFormat({ format: DATE_TIME_FORMAT_TYPE.DATE_TIME_MINUTES }),
      )}`,
    );
    await command(
      `mkdir -p backups && mkdir -p ${dest} && rsync -r ${includesF.join(' ')}  ${excludesF
        .map((pattern) => `--exclude '${pattern.replace('**/', '')}'`)
        .join(' ')} ${dest}`,
    );
    process.chdir(root || fromRoot());
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default backup;
