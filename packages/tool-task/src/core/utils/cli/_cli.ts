import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import type { _CliModel, _CliParamsModel } from '@tool/task/core/utils/cli/_cli.models';
import { command } from '@tool/task/core/utils/command/command';

export const _cli = async ({ task }: _CliParamsModel): _CliModel =>
  await command(`gulp --cwd ${fromRoot()} --gulpfile ${fromConfig('core/task/task.js')} ${task || ''}`);
