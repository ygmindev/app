import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { command } from '@tool/task/core/utils/command/command';
import { CLEAN_PATTERNS } from '@tool/task/core/utils/runClean/runClean.constants';
import type { RunCleanModel, RunCleanParamsModel } from '@tool/task/core/utils/runClean/runClean.models';

export const runClean = async ({ patterns, root = fromWorking() }: RunCleanParamsModel): RunCleanModel =>
  await command(`npx rimraf ${(patterns || CLEAN_PATTERNS).join(' ')}`, { root });
