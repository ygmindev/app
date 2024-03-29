import { children } from '@lib/backend/file/utils/children/children';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { config } from '@lib/config/core/file/file';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type RevertParamsModel } from '@tool/task/core/tasks/revert/revert.models';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { copy } from '@tool/task/file/utils/copy/copy';
import sortBy from 'lodash/sortBy';
import { resolve } from 'path';

const revert: TaskParamsModel<RevertParamsModel> = {
  name: 're-vert',

  options: () => {
    const backups = sortBy(
      children(config.backupDir, { isDirectory: true }),
      ({ lastUpdated }) => -lastUpdated.valueOf(),
    ).map(({ name }) => name);
    return [{ key: 'name', options: backups, type: PROMPT_TYPE.LIST }];
  },

  task: [
    async ({ options }) => {
      if (options?.name) {
        const childrenF = children(resolve(config.backupDir, options.name));
        for (const child of childrenF) {
          await copy({ from: child.fullPath, isOverwrite: true, to: fromRoot(child.name) });
        }
      }
    },
  ],
};

export default revert;
