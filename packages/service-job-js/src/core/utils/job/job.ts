import { type JobModel } from '@lib/config/job/job.models';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { basename } from 'path';
import process from 'process';
import { fileURLToPath } from 'url';

if (process.env.NODE_ENV !== 'production') {
  const dotenv = await import('dotenv');
  dotenv.config();
}

const main = async ({ command, container, name, schedule }: JobModel): Promise<void> => {
  logger.info(`⌚ Starting job ${name}...`);
  try {
    logger.info(`✅ Completed job ${name}...`);
    process.exit(0);
  } catch (err) {
    console.error(`[${new Date().toISOString()}] Job failed`, err);
    process.exit(1);
  }
};

const isMain = basename(fileURLToPath(import.meta.url)) === basename(process.argv[1]);

if (isMain) {
  main();
}

export { main };
