import { children } from '@lib/backend/file/utils/children/children';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import { BACKUP_DIR } from '@tool/task/core/tasks/backup/backup.constants';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { copy } from '@tool/task/file/utils/copy/copy';
import sortBy from 'lodash/sortBy';
import { resolve } from 'path';

const revert: TaskParamsModel = {
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
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default revert;
