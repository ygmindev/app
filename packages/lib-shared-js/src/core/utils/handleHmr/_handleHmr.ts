import {
  type _HandleHmrModel,
  type _HandleHmrParamsModel,
} from '@lib/shared/core/utils/handleHmr/_handleHmr.models';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

export const _handleHmr = async ({
  onDispose,
  onInitialize,
}: _HandleHmrParamsModel): Promise<_HandleHmrModel> => {
  if (!import.meta?.hot) {
    logger.warn('HMR not supported');
    return;
  }

  let isDisposed = false;
  let isInitialized = false;

  let disposable: Promise<void> | null = null;
  const handleDispose = async (): Promise<void> => {
    if (disposable) return;
    disposable = (async () => {
      if (isDisposed) return;
      isDisposed = true;
      try {
        await onDispose?.();
      } catch (err) {
        logger.error('HMR dispose failed', err);
      }
    })();

    return disposable;
  };

  const handleInitialize = async (): Promise<void> => {
    if (isInitialized) return;
    isInitialized = true;

    try {
      await onInitialize?.();
    } catch (err) {
      logger.error('HMR init failed', err);
    }
  };

  void handleInitialize();

  import.meta.hot.dispose(handleDispose);
  import.meta.hot.on('vite:beforeFullReload', handleDispose);
  import.meta.hot.accept(() => {
    isInitialized = false;
    isDisposed = false;
    return handleInitialize();
  });
};
