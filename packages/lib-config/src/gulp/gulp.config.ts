import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { packages } from '@lib/backend/file/utils/packages/packages';
import { generate } from '@tool/generate/tasks/generate/generate';
import { generateTemplate } from '@tool/generate/tasks/generateTemplate/generateTemplate';
import { backup } from '@tool/task/core/tasks/backup/backup';
import { healthCheck } from '@tool/task/core/tasks/healthCheck/healthCheck';
import { portKill } from '@tool/task/core/tasks/portKill/portKill';
import { revert } from '@tool/task/core/tasks/revert/revert';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { register } from '@tool/task/core/utils/register/register';
import { registry } from '@tool/task/core/utils/registry/registry';
import { runAll } from '@tool/task/core/utils/runAll/runAll';
import { close } from '@tool/task/database/tasks/close/close';
import { kill } from '@tool/task/database/tasks/kill/kill';
import { start } from '@tool/task/database/tasks/start/start';
import { internationalize } from '@tool/task/locale/tasks/internationalize/internationalize';
import { install } from '@tool/task/node/tasks/install/install';
import { upgrade } from '@tool/task/node/tasks/upgrade/upgrade';
import { existsSync } from 'fs';
import { keys } from 'lodash';

// Core tasks
register(healthCheck);
register(backup);
register(revert);
register(internationalize);
register(portKill);
register(generate);
register(generateTemplate);

register({ ...runAll, name: 'clean', options: { patterns: [/clean/] } });

// Node tasks
register(install);
register(upgrade);

// Database tasks
register(start);
register(kill);
register(close);

// Lint tasks
register({ ...runAll, name: 'lint', options: { patterns: [/lint/] } });

// Test tasks
register({ ...runAll, name: 'test', options: { patterns: [/test/] } });

// Package tasks
packages.map((target) => {
  const tasksDir = fromPackages(target, 'tasks.config.ts');
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
