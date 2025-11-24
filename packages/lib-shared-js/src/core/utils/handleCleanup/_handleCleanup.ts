import {
  type _HandleCleanupModel,
  type _HandleCleanupParamsModel,
} from '@lib/shared/core/utils/handleCleanup/_handleCleanup.models';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import closeWithGrace from 'close-with-grace';

let isTerminated: boolean;

export const _handleCleanup = async ({
  onCleanUp,
}: _HandleCleanupParamsModel): Promise<_HandleCleanupModel> => {
  closeWithGrace({ delay: 1000 }, async ({ err, signal }) => {
    if (!isTerminated) {
      logger.debug(`shutting down due to ${signal}`, err && err?.message);
      await onCleanUp?.();
      isTerminated = true;
    }
  });
};
