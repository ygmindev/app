import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { config } from '@lib/config/core/file/file';
import { command } from '@tool/task/core/utils/command/command';
import type {
  RunCleanModel,
  RunCleanParamsModel,
} from '@tool/task/core/utils/runClean/runClean.models';
import { join } from 'path';

export const runClean = async ({
  patterns,
  root = fromWorking(),
}: RunCleanParamsModel): RunCleanModel =>
  await command(
    `npx rimraf ${(
      patterns || [
        ...config.cleanPatterns,
        ...config.cleanPatterns.map((pattern) => join('**/', pattern)),
      ]
    ).join(' ')}`,
    { root },
  );
