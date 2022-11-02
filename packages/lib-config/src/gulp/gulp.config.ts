import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { packages } from '@lib/backend/file/utils/packages/packages';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { register } from '@tool/task/core/utils/register/register';
import { registry } from '@tool/task/core/utils/registry/registry';
import { existsSync } from 'fs';
import { keys } from 'lodash';

// All tasks
const tasks = fromGlobs({ globs: ['*/src/**/*.task.ts'], isAbsolute: true, root: fromPackages() });
for (const task of tasks) {
  register(require(task).default);
}

// Package tasks
packages.map((target) => {
  const tasksDir = fromPackages(target, 'tasks.ts');
  existsSync(tasksDir) && require(tasksDir);
});

const _registry = registry();
register({
  name: 'default',

  task: async () => {
    const { name } = await prompt([
      { key: 'name', options: keys(_registry), type: PROMPT_TYPE.LIST },
    ]);
    return _registry[name]();
  },
});
