import {
  type _HandleCleanupModel,
  type _HandleCleanupParamsModel,
} from '@lib/shared/core/utils/handleCleanup/_handleCleanup.models';
import closeWithGrace from 'close-with-grace';

let isTerminated: boolean;

export const _handleCleanup = async ({
  onCleanup,
}: _HandleCleanupParamsModel): Promise<_HandleCleanupModel> => {
  closeWithGrace(async (_) => {
    if (!isTerminated) {
      onCleanup && (await onCleanup());
      isTerminated = true;
    }
  });
};
