import closeWithGrace from 'close-with-grace';

import type { _SetupModel, _SetupParamsModel } from '#lib-shared/core/utils/setup/_setup.models';

export const _setup = async ({ onShutdown }: _SetupParamsModel): _SetupModel => {
  closeWithGrace(async (_) => onShutdown && (await onShutdown()));
};
