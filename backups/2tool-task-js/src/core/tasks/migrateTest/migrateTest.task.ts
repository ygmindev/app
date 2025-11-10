import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { existsSync, mkdirSync, renameSync } from 'fs';

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
        const lastIndex = newPath.lastIndexOf('/');
        const newDir = newPath.substring(0, lastIndex);
        if (!existsSync(newDir)) {
          mkdirSync(newDir, { recursive: true });
        }
        renameSync(oldPath, newPath);
      }
    },
  ],
};

export default migrateTest;
