import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import type { _CliParamsModel } from '@tool/task/core/utils/cli/_cli.models';
import { command } from '@tool/task/core/utils/command/command';
import { taskConfigParams } from '@lib/config/core/task/params/task.params';

export const _cli = async ({ task }: _CliParamsModel): Promise<boolean> =>
  await command({ command: `${taskConfigParams.command} ${task}`, root: fromRoot() });
