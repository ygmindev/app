import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import fileConfig from '@lib/config/file/file';
import { EXCLUDE_PATTERNS } from '@lib/config/file/file.constants';
import { dateTimeFormat } from '@lib/shared/data/utils/dateTimeFormat/dateTimeFormat';
import { DATE_TIME_FORMAT_TYPE } from '@lib/shared/data/utils/dateTimeFormat/dateTimeFormat.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type BackupParamsModel } from '@tool/task/core/tasks/backup/backup.models';
import kebabCase from 'lodash/kebabCase';
import { join } from 'path';

const backup: TaskParamsModel<BackupParamsModel> = {
  name: 'backup',

  onFinish: [({ root }) => process.chdir(root ?? fromRoot())],

  options: () => [{ key: 'name' }],

  task: [
    async ({ options }) => {
      const { backupPath } = fileConfig.params();
      const includesF = options?.includes ?? [fromRoot('*')];
      const excludesF = options?.excludes ?? EXCLUDE_PATTERNS;
      const dest = join(
        backupPath,
        `${kebabCase(options?.name)}-${kebabCase(
          dateTimeFormat(new Date(), DATE_TIME_FORMAT_TYPE.DATE_TIME_MINUTES),
        )}`,
      );
      return `mkdir -p backups && mkdir -p ${dest} && rsync -r ${includesF.join(' ')}  ${excludesF
        .map((pattern) => `--exclude '${pattern.replace('**/', '')}'`)
        .join(' ')} ${dest}`;
    },

    ({ root }) => process.chdir(root ?? fromRoot()),
  ],
};

export default backup;
