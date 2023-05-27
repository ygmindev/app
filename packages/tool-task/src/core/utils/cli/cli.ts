import { config } from '@lib/config/core/setup/setup.node';
import { Container } from '@lib/backend/core/utils/Container/Container';
import { error } from '@lib/shared/logging/utils/logger/logger';
import { TaskRegistry } from '@tool/task/core/utils/TaskRegistry/TaskRegistry';
import { _cli } from '@tool/task/core/utils/cli/_cli';

export const cli = async (): Promise<void> => {
  await config.onInitialize();
  const _taskRegistry = Container.get(TaskRegistry);
  let _task = process.argv.splice(2).join(' ');
  _task = _taskRegistry.aliases[_task] ?? _task;
  !(await _cli({ task: _task })) && error(`${_task} failed`);
};
