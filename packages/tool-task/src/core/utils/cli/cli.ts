import { config } from '@lib/config/core/setup/setup.node';
import { error } from '@lib/shared/logging/utils/logger/logger';
import { _cli } from '@tool/task/core/utils/cli/_cli';

export const cli = async (): Promise<void> => {
  await config.onInitialize();
  const _task = process.argv.splice(2).join(' ');
  !(await _cli({ task: _task })) && error(`${_task} failed`);
};
