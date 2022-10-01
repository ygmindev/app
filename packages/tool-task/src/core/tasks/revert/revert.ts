import { children } from '@lib/backend/file/utils/children/children';
import { copy } from '@lib/backend/file/utils/copy/copy';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { BACKUP_DIR } from '@tool/task/core/tasks/backup/backup.constants';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';
import { sortBy } from 'lodash';
import { resolve } from 'path';

export const revert: RegisterParamsModel = {
  name: 'revert',

  task: async () => {
    const backups = sortBy(
      children({ from: BACKUP_DIR, isDirectory: true }),
      ({ lastUpdated }) => -lastUpdated.valueOf(),
    ).map(({ name }) => name);
    const { name } = await prompt([{ key: 'name', options: backups, type: PROMPT_TYPE.LIST }]);
    const _children = children({ from: resolve(BACKUP_DIR, name) });
    for (const child of _children) {
      await copy({ from: child.fullPath, isOverwrite: true, to: fromRoot(child.name) });
    }
    return { status: TASK_RESULTS_STATUS_TYPE.SUCCESS };
  },
};
