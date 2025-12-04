import {
  type _HandleHmrModel,
  type _HandleHmrParamsModel,
} from '@lib/shared/core/utils/handleHmr/_handleHmr.models';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

export const _handleHmr = ({ onDispose, onInitialize }: _HandleHmrParamsModel): _HandleHmrModel => {
  if (!import.meta?.hot) {
    logger.warn('HMR not supported');
    return;
  }

  await onInitialize?.();

  let isDisposed = false;

  const handleDispose = async (): Promise<void> => {
    if (isDisposed) return;
    isDisposed = true;
    await onDispose?.();
  };

  import.meta.hot.dispose(handleDispose);

  import.meta.hot.on('vite:beforeFullReload', handleDispose);

  import.meta.hot.accept(async () => {
    if (isDisposed) return;
    await onInitialize?.();
  });
};
