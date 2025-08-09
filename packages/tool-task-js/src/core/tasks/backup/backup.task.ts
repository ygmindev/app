import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import fileConfig from '@lib/config/file/file';
import { EXCLUDE_PATTERNS } from '@lib/config/file/file.constants';
import { DATETIME_FORMAT } from '@lib/shared/datetime/datetime.models';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type BackupParamsModel } from '@tool/task/core/tasks/backup/backup.models';
import kebabCase from 'lodash/kebabCase';
import { join } from 'path';

const backup: TaskParamsModel<BackupParamsModel> = {
  name: 'backup',

  onFinish: [({ root }) => process.chdir(root ?? fromRoot())],

  options: async () => [{ key: 'name' }],

  task: [
    async ({ options }) => {
      const { backupPath } = fileConfig.params();
      const includesF = options?.includes ?? [fromRoot('*')];
      const excludesF = options?.excludes ?? EXCLUDE_PATTERNS;
      const dest = join(
        backupPath,
        `${kebabCase(options?.name)}-${kebabCase(
          new DateTime().format(DATETIME_FORMAT.DATE_TIME_MINUTES),
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
