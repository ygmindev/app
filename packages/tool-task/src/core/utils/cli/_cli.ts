import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import taskConfigParams from '@lib/config/core/task/params/task.params';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { _CliParamsModel } from '@tool/task/core/utils/cli/_cli.models';
import { runWithConfig } from '@tool/task/core/utils/runWithConfig/runWithConfig';

export const _cli = async ({ task }: _CliParamsModel): Promise<boolean> => {
  const { status } = await runWithConfig({
    command: `${taskConfigParams.command} ${task}`,
    root: fromRoot(),
  });
  if (status === TASK_STATUS.SUCCESS) {
    return true;
  } else {
    return false;
  }
};
