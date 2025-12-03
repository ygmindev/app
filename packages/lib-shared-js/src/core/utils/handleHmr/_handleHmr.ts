import {
  type _HandleHmrModel,
  type _HandleHmrParamsModel,
} from '@lib/shared/core/utils/handleHmr/_handleHmr.models';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

export const _handleHmr = async ({
  onDispose,
  onInitialize,
}: _HandleHmrParamsModel): Promise<_HandleHmrModel> => {
  await onInitialize?.();

  if (!import.meta?.hot) {
    logger.warn('HMR not supported ');
    return;
  }

  let isDisposed = false;
  const handleDispose = async (): Promise<void> => {
    !isDisposed && (await onDispose?.());
    isDisposed = true;
  };

  import.meta.hot.dispose(async () => {
    await handleDispose();
  });

  import.meta.hot.on('vite:beforeFullReload', async () => {
    await handleDispose();
  });

  import.meta.hot.accept(async () => !isDisposed && onInitialize?.());
};
