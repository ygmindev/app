import { timeit } from '@lib/shared/core/utils/timeit/timeit';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import {
  type CreateJobModel,
  type CreateJobParamsModel,
} from '@service/job/core/utils/createJob/createJob.models';
import { basename } from 'path';
import process from 'process';
import { fileURLToPath } from 'url';

export const createJob = async ({
  job,
  onFinish,
}: CreateJobParamsModel): Promise<CreateJobModel> => {
  const isMain = basename(fileURLToPath(import.meta.url)) === basename(process.argv[1]);
  if (isMain) {
    logger.progress('Starting');
    try {
      await timeit(job);
      logger.success('Completed');
    } catch (e) {
      logger.fail('Failed', e);
      process.exitCode = 1;
    } finally {
      await onFinish?.();
    }
    process.exit(process.exitCode || 0);
  }
};
