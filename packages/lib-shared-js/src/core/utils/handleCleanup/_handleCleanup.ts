import {
  type _HandleCleanupModel,
  type _HandleCleanupParamsModel,
} from '@lib/shared/core/utils/handleCleanup/_handleCleanup.models';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import closeWithGrace from 'close-with-grace';

let isTerminated: boolean = false;

export const _handleCleanup = async ({
  onCleanUp,
}: _HandleCleanupParamsModel): Promise<_HandleCleanupModel> => {
  const handleCleanup = async (): Promise<void> => {
    if (!isTerminated) {
      isTerminated = true;
      await onCleanUp?.();
    }
  };

  closeWithGrace({ delay: 1000 }, async ({ err, signal }) => {
    logger.debug(`shutting down due to ${signal}`, err && err?.message);
    await handleCleanup();
  });

  if (import.meta?.hot) {
    import.meta.hot.on('vite:beforeFullReload', handleCleanup);
    import.meta.hot.dispose(handleCleanup);
  }
};
