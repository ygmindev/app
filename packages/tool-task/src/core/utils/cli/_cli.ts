import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { error } from '@lib/shared/logging/utils/logger/logger';
import type { _CliParamsModel } from '@tool/task/core/utils/cli/_cli.models';
import { command } from '@tool/task/core/utils/command/command';

export const _cli = async ({ task }: _CliParamsModel): Promise<void> => {
  if (!(await command({ command: `gulp ${task} --silent`, root: fromRoot() }))) {
    error(`${task} does not exist`);
  }
};
