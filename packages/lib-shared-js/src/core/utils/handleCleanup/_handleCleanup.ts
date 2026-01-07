import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import {
  type _HandleCleanupModel,
  type _HandleCleanupParamsModel,
} from '@lib/shared/core/utils/handleCleanup/_handleCleanup.models';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import closeWithGrace from 'close-with-grace';

let instance: ReturnType<typeof closeWithGrace> | null = null;

export const _handleCleanup = async ({
  onCleanUp,
}: _HandleCleanupParamsModel): Promise<_HandleCleanupModel> => {
  instance?.uninstall();

  const handleCleanup = debounce(async (): Promise<void> => {
    logger.debug('cleaning up...');
    await onCleanUp?.();
  });

  instance = closeWithGrace({ delay: 1000 }, async ({ err, signal }) => {
    logger.debug(`shutting down due to ${signal} ${err}`);
    if (err) {
      logger.trace(err as Error);
    }
    await handleCleanup();
  });

  if (process.env.NODE_ENV === 'development' && !process.env.JEST_WORKER_ID) {
    const { _handleHmr } = await import('@lib/shared/core/utils/handleCleanup/_handleHmr');
    await _handleHmr(async () => {
      instance?.uninstall();
      await handleCleanup();
    });
  }
};
