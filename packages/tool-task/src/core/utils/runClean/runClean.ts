import { CLEAN_PATTERNS } from '@lib/shared/file/file.constants';
import { command } from '@tool/task/core/utils/command/command';
import type { RunCleanParamsModel } from '@tool/task/core/utils/runClean/runClean.models';

export const runClean = async ({ patterns, root }: RunCleanParamsModel): Promise<boolean> =>
  command({ command: `npx rimraf ${(patterns || CLEAN_PATTERNS).join(' ')}`, root });
