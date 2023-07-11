import closeWithGrace from 'close-with-grace';

import {
  type _CleanupModel,
  type _CleanupParamsModel,
} from '#lib-shared/core/utils/cleanup/_cleanup.models';

let isTerminated: boolean;

export const _cleanup = async ({ onCleanup }: _CleanupParamsModel): Promise<_CleanupModel> => {
  closeWithGrace(async (_) => {
    if (!isTerminated) {
      onCleanup && (await onCleanup());
      isTerminated = true;
    }
  });
};
