import closeWithGrace from 'close-with-grace';

import {
  type _CleanUpModel,
  type _CleanUpParamsModel,
} from '#lib-shared/core/utils/cleanUp/_cleanUp.models';

let isTerminated: boolean;

export const _cleanUp = async ({ onTerminate }: _CleanUpParamsModel): _CleanUpModel => {
  closeWithGrace(async (_) => {
    if (!isTerminated) {
      onTerminate && (await onTerminate());
      isTerminated = true;
    }
  });
};
