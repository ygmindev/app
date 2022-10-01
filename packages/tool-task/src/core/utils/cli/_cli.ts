import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import type { _CliParamsModel } from '@tool/task/core/utils/cli/_cli.models';
import { command } from '@tool/task/core/utils/command/command';

export const _cli = async ({ task }: _CliParamsModel): Promise<void> => {
  await command({ command: `gulp ${task} --silent`, root: fromRoot() });
};
