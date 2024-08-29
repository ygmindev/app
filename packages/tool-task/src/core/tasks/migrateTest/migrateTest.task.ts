import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { renameSync } from 'fs';

const migrateTest: TaskParamsModel<unknown> = {
  name: 'migrate-test',

  task: [
    async ({ options }) => {
      const result = fromGlobs(['*/src/**/*.spec.ts', '*/src/**/*.spec.tsx'], {
        isAbsolute: true,
        root: fromPackages(),
      });
      for (const oldPath of result) {
        const newPath = oldPath.replace('/src/', '/tests/unit/');
        renameSync(oldPath, newPath);
      }
    },
  ],
};

export default migrateTest;
