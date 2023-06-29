import { type CallablePromiseModel } from '#lib-shared/core/core.models';

export type SetupConfigModel = {
  onInitialize: CallablePromiseModel;

  onShutdown: CallablePromiseModel;
};
