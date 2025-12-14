import {
  type _HandleCleanupModel,
  type _HandleCleanupParamsModel,
} from '@lib/shared/core/utils/handleCleanup/_handleCleanup.models';
import closeWithGrace from 'close-with-grace';

let isTerminated: boolean = false;

export const _handleCleanup = async ({
  onCleanUp,
}: _HandleCleanupParamsModel): Promise<_HandleCleanupModel> => {
  const handleCleanup = async (): Promise<void> => {
    if (!isTerminated) {
      console.debug('cleaning up...');
      isTerminated = true;
      await onCleanUp?.();
    }
  };

  closeWithGrace({ delay: 1000 }, async ({ err, signal }) => {
    console.debug(`shutting down due to ${signal}`, err);
    await handleCleanup();
  });

  import.meta?.hot?.on('vite:beforeFullReload', handleCleanup);
};
